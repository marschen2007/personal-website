import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export interface PostData {
  id: string
  title: string
  date: string
  description: string
  contentHtml: string
}

export function getSortedPostsData(): Omit<PostData, 'contentHtml'>[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md')) // 只處理 .md 文件
    .map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      try {
        const matterResult = matter(fileContents)
        const { title, date, description } = matterResult.data

        // 確保所有必要的 frontmatter 都存在
        if (!title || !date || !description) {
          console.warn(`Skipping ${fileName}: missing required frontmatter`)
          return null
        }

        return {
          id,
          title,
          date,
          description
        }
      } catch (error) {
        console.warn(`Error parsing ${fileName}:`, error)
        return null
      }
    })
    .filter(Boolean) // 移除無效的文章

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string; date: string; description: string })
  }
}

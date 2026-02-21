import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			// Transform string to Date object
			date: z.coerce.date().optional(),
			updatedDate: z.coerce.date().optional(),
			coverImage: image().optional(),
			tags: z.array(z.string()).optional(),
			related: z.string().optional(), // ข้อความที่จะแสดง เช่น "ทำความรู้จัก Act Lab ให้มากขึ้น"
    		linkurl: z.string().optional(), // ลิงก์ปลายทาง
			download: z.string().optional(),
		}),
});

const pages = defineCollection({
  // บอก Astro ให้ไปกวาดไฟล์ .md หรือ .mdx ทั้งหมดในโฟลเดอร์ pages
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }), 
  schema: ({ image }) => 
	z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		coverImage: image().optional(),
  	}),
});

export const collections = { blog, pages };

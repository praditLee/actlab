// src/pages/search.json.ts
import { getCollection } from 'astro:content';

export async function GET() {
  // 1. ดึงข้อมูลเนื้อหาทั้งหมด (ถ้ามี collection อื่นอีกก็เพิ่มได้ครับ)
  const pages = await getCollection('pages');
  // สมมติว่ามีโฟลเดอร์ blog ด้วย (ถ้าไม่มี ให้ลบ 2 บรรทัดนี้ออกครับ)
  const blogs = await getCollection('blog').catch(() => []); 

  // 2. จับมาแปลงรูปร่างให้อยู่ในฟอร์แมตเดียวกัน
  const searchIndex = [
    ...pages.map(page => ({
      title: page.data.title,
      description: page.data.description || '',
      url: `/${page.id}`, // ลิงก์ไปหน้าเพจ
      type: 'Page',
      tags: page.data.tags || []
    })),
    ...blogs.map(blog => ({
      title: blog.data.title,
      description: blog.data.description || '',
      url: `/blog/${blog.id}`, // ลิงก์ไปหน้าบล็อก
      type: 'Blog',
      tags: blog.data.tags || []
    }))
  ];

  // 3. ส่งออกเป็นไฟล์ JSON
  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
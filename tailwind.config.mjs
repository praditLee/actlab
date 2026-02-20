/** @type {import('tailwindcss').Config} */
export default {
	// 🔥 บรรทัดนี้สำคัญที่สุด! 
	// บอก Tailwind ว่าให้ไปสแกนหาชื่อ Class ในไฟล์นามสกุลเหล่านี้
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}
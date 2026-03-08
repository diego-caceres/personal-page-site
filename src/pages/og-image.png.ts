import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export const GET: APIRoute = async () => {
  const fontRegular = readFileSync(resolve('node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'));
  const fontBold = readFileSync(resolve('node_modules/@fontsource/inter/files/inter-latin-700-normal.woff'));

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0a0a0f',
          padding: '72px 80px',
          fontFamily: 'Inter',
          position: 'relative',
        },
        children: [
          // Top: accent bar
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '40px',
                      height: '3px',
                      background: 'linear-gradient(to right, #db2777, #7c3aed)',
                      borderRadius: '2px',
                    },
                  },
                },
                {
                  type: 'span',
                  props: {
                    style: {
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#db2777',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                    },
                    children: 'diegocaceres.dev',
                  },
                },
              ],
            },
          },
          // Center: name + tagline
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '16px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '80px',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.05,
                    },
                    children: 'Diego Cáceres',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '32px',
                      fontWeight: 400,
                      color: '#a1a1aa',
                      lineHeight: 1.4,
                    },
                    children: 'Software Engineer · Montevideo, Uruguay',
                  },
                },
              ],
            },
          },
          // Bottom: skills chips
          {
            type: 'div',
            props: {
              style: { display: 'flex', gap: '12px' },
              children: ['React', 'TypeScript', 'Node.js', 'Python'].map((skill) => ({
                type: 'div',
                props: {
                  style: {
                    padding: '8px 20px',
                    borderRadius: '9999px',
                    border: '1px solid #3f3f46',
                    color: '#a1a1aa',
                    fontSize: '18px',
                    fontWeight: 400,
                    backgroundColor: '#18181b',
                  },
                  children: skill,
                },
              })),
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: fontRegular, weight: 400 },
        { name: 'Inter', data: fontBold, weight: 700 },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=604800, immutable',
    },
  });
};

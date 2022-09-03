import Head from 'next/head';
import { ReactNode } from 'react';

import styles from "./layout.module.css"
import { Navbar } from './navbar'

export const siteTitle = "Nick's Portfolio"; 

interface Props {
    children?: ReactNode,
}

export default function Layout({ children }: Props) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main>
                <div className={styles.wrapper}>
                    <Navbar />
                    {children}
                </div>
            </main>
        </div>
    );
}
import {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Link from "next/link";

const Index: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Juicer Labs</title>
                <meta name={"description"} content={"Juicer Labs Website"} />
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Juicer Labs
                </h1>

                <p className={styles.description}>
                    Check out our{" "}
                    <span>
                        <Link href={"https://github.com/juicer-labs"}>
                            <a className={styles.link} href={"https://github.com/juicer-labs"}>
                                GitHub
                            </a>
                        </Link>
                    </span>!
                </p>
            </main>
        </div>
    );
}

export default Index;

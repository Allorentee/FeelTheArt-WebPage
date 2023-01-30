import style from "./titlePage.module.css";

export function TitlePage({ title }: { title: string }) {
  return <h1 className={style.title}>{title}</h1>;
}

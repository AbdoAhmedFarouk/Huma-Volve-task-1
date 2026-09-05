import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
};

export default function Card({
  title,
  description,
  image,
  children,
}: CardProps) {
  return (
    <article className="card">
      {image && <img className="card-image" src={image} alt="" />}
      <div className="card-content">
        <p className="eyebrow">Reusable component</p>
        <h2>{title}</h2>
        <p className="card-description">{description}</p>
        {children && <div className="card-actions">{children}</div>}
      </div>
    </article>
  );
}

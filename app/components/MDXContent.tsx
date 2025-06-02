import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

type MDXContentProps = {
  source: string;
};

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={source} components={{
        img: (props) => (
          <Image
            {...props}
            alt={props.alt || ""}
            width={props.width || 800}
            height={props.height || 400}
            className="rounded-lg"
          />
        ),
      }} />
    </div>
  );
}

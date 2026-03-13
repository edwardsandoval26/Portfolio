import Tag from "@/components/ui/Tag";
import DemoEmbed from "@/components/ui/DemoEmbed";

const mdxComponents = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="text-3xl font-bold text-surface-100 mt-10 mb-4" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="text-2xl font-semibold text-surface-100 mt-8 mb-3 pb-2 border-b border-surface-800/50" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="text-xl font-semibold text-surface-200 mt-6 mb-2" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="text-surface-300 leading-relaxed mb-4" {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="list-disc list-inside text-surface-300 mb-4 space-y-1.5 ml-2" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="list-decimal list-inside text-surface-300 mb-4 space-y-1.5 ml-2" {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="text-surface-300 leading-relaxed" {...props} />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote className="border-l-2 border-primary-500 pl-4 py-1 my-4 text-surface-400 italic" {...props} />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code className="bg-surface-800 text-primary-300 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre className="bg-surface-900 border border-surface-700/50 rounded-xl p-4 overflow-x-auto mb-4 text-sm" {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a className="text-primary-400 hover:text-primary-300 underline underline-offset-2 transition-colors" {...props} />
    ),
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse" {...props} />
        </div>
    ),
    th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th className="text-left text-surface-200 font-semibold px-4 py-2.5 bg-surface-800/50 border-b border-surface-700/50" {...props} />
    ),
    td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td className="text-surface-300 px-4 py-2.5 border-b border-surface-800/30" {...props} />
    ),
    hr: () => <hr className="border-surface-700/50 my-8" />,
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="rounded-xl border border-surface-700/50 my-4" alt="" {...props} />
    ),
    Tag,
    DemoEmbed,
};

export default mdxComponents;

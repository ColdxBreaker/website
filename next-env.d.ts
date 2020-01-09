/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images"/>
declare module '*.css' {
    const content: {[className: string]: string};
    export default content;
}
declare module '*.svg'{
    const content: string;
    export default content;
}

declare module '*.pdf'{
    const content: string;
    export default content;
}


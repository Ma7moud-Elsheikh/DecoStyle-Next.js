declare module 'isotope-layout' {
    export interface IsotopeOptions {
        itemSelector?: string;
        layoutMode?: string;
        percentPosition?: boolean;
        masonry?: { columnWidth?: string | number };
    }

    export default class Isotope {
        constructor(element: Element | string, options?: IsotopeOptions);
        arrange(options: { filter: string }): void;
        destroy(): void;
    }
}
declare module 'imagesloaded';

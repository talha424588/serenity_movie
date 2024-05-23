
namespace MyProject {
    export interface MovieRow {
        Id?: number;
        Title?: string;
        Description?: string;
        Storyline?: string;
        Year?: number;
        ReleaseDate?: string;
        Runtime?: number;
    }

    export namespace MovieRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Movie';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const Title;
            export declare const Description;
            export declare const Storyline;
            export declare const Year;
            export declare const ReleaseDate;
            export declare const Runtime;
        }

        [
            'Id',
            'Title',
            'Description',
            'Storyline',
            'Year',
            'ReleaseDate',
            'Runtime'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
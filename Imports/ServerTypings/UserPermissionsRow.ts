
namespace MyProject {
    export interface UserPermissionsRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
    }

    export namespace UserPermissionsRow {
        export const idProperty = 'UserPermissionId';
        export const nameProperty = 'PermissionKey';
        export const localTextPrefix = 'UserPermissions';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const UserPermissionId;
            export declare const UserId;
            export declare const PermissionKey;
            export declare const Granted;
            export declare const UserUsername;
            export declare const UserDisplayName;
            export declare const UserEmail;
            export declare const UserSource;
            export declare const UserPasswordHash;
            export declare const UserPasswordSalt;
            export declare const UserLastDirectoryUpdate;
            export declare const UserUserImage;
            export declare const UserInsertDate;
            export declare const UserInsertUserId;
            export declare const UserUpdateDate;
            export declare const UserUpdateUserId;
            export declare const UserIsActive;
        }

        [
            'UserPermissionId',
            'UserId',
            'PermissionKey',
            'Granted',
            'UserUsername',
            'UserDisplayName',
            'UserEmail',
            'UserSource',
            'UserPasswordHash',
            'UserPasswordSalt',
            'UserLastDirectoryUpdate',
            'UserUserImage',
            'UserInsertDate',
            'UserInsertUserId',
            'UserUpdateDate',
            'UserUpdateUserId',
            'UserIsActive'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
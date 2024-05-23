
namespace MyProject {

    @Serenity.Decorators.registerClass()
    export class UserRolesGrid extends Serenity.EntityGrid<UserRolesRow, any> {
        protected getColumnsKey() { return 'UserRoles'; }
        protected getDialogType() { return UserRolesDialog; }
        protected getIdProperty() { return UserRolesRow.idProperty; }
        protected getInsertPermission() { return UserRolesRow.insertPermission; }
        protected getLocalTextPrefix() { return UserRolesRow.localTextPrefix; }
        protected getService() { return UserRolesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
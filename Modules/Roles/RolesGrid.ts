
namespace MyProject {

    @Serenity.Decorators.registerClass()
    export class RolesGrid extends Serenity.EntityGrid<RolesRow, any> {
        protected getColumnsKey() { return 'Roles'; }
        protected getDialogType() { return RolesDialog; }
        protected getIdProperty() { return RolesRow.idProperty; }
        protected getInsertPermission() { return RolesRow.insertPermission; }
        protected getLocalTextPrefix() { return RolesRow.localTextPrefix; }
        protected getService() { return RolesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
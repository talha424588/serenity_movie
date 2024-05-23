using FluentMigrator;

namespace SereneMovie.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20240522_1505)]
public class DefaultDB_20240522_1505_MovieTable : AutoReversingMigration
{
    public override void Up()
    {

        Create.Schema("mov");
        Create.Table("Movie").InSchema("mov")
            .WithColumn("Id").AsInt32()
                .Identity().PrimaryKey().NotNullable()
            .WithColumn("Title").AsString(200).NotNullable()
            .WithColumn("Description").AsString(1000).Nullable()
            .WithColumn("Storyline").AsString(Int32.MaxValue).Nullable()
            .WithColumn("Year").AsInt32().Nullable()
            .WithColumn("ReleaseDate").AsDateTime().Nullable()
            .WithColumn("Runtime").AsInt32().Nullable();
    }
}

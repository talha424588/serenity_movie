using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace SereneMovie.Default.Columns;

[ColumnsScript("Default.Movie")]
[BasedOnRow(typeof(MovieRow), CheckNames = true)]
public class MovieColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [EditLink]
    public string Title { get; set; }
    public string Description { get; set; }
    public string Storyline { get; set; }
    public int Year { get; set; }
    public DateTime ReleaseDate { get; set; }
    [DisplayName("Runtime in Mins")]
    public int Runtime { get; set; }
}
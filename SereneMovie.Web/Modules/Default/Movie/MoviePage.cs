using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SereneMovie.Default.Pages;

[PageAuthorize(typeof(MovieRow))]
public class MoviePage : Controller
{
    [Route("Default/Movie")]
    public ActionResult Index()
    {
        return this.GridPage("@/Default/Movie/MoviePage",
            MovieRow.Fields.PageTitle());
    }
}
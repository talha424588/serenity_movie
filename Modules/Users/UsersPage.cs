
namespace MyProject.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Users"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UsersRow))]
    public class UsersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Users/UsersIndex.cshtml");
        }
    }
}
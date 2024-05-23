using Serenity.Navigation;
using MyPages = MyProject.Pages;

[assembly: NavigationLink(int.MaxValue, "Movie", typeof(MyPages.MovieController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Roles", typeof(MyPages.RolesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "User Permissions", typeof(MyPages.UserPermissionsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "User Roles", typeof(MyPages.UserRolesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Users", typeof(MyPages.UsersController), icon: null)]
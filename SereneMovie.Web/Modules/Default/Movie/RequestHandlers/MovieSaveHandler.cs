using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SereneMovie.Default.MovieRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SereneMovie.Default.MovieRow;

namespace SereneMovie.Default;

public interface IMovieSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class MovieSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieSaveHandler
{
    public MovieSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}
using MyRequest = Serenity.Services.SaveRequest<SereneMovie.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SereneMovie.Administration.LanguageRow;


namespace SereneMovie.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}
using Amazon.Lambda.Core;
using System.Net.Http.Json;
using System.Text.Json;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace Lambda_AiPriceFinder;

public class Function
{

    /// <summary>
    /// A simple function that takes a string and does a ToUpper
    /// </summary>
    /// <param name="input">The event for the Lambda function handler to process.</param>
    /// <param name="context">The ILambdaContext that provides methods for logging and describing the Lambda environment.</param>
    /// <returns></returns>
    private static readonly HttpClient httpClient = new();

    public async Task<string> FunctionHandler(string input, ILambdaContext context)
    {
        string ENV = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
        var apiKey = (ENV == "Development") ? Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") : "API_KEY_2 not set";
        var requestBody = new
        {
            model = "gpt-5",
            messages = new[]
            {
                new { role = "user", content = input }
            }
        };

        using var request = new HttpRequestMessage(HttpMethod.Post, "https://api.openai.com/v1/chat/completions")
        {
            Content = JsonContent.Create(requestBody)
        };
        request.Headers.Add("Authorization", $"Bearer {apiKey}");

        var response = await httpClient.SendAsync(request);
        response.EnsureSuccessStatusCode();

        var json = await response.Content.ReadAsStringAsync();
        using var doc = JsonDocument.Parse(json);
        var outputText = doc.RootElement
            .GetProperty("choices")[0]
            .GetProperty("message")
            .GetProperty("content")
            .GetString();

        return outputText ?? string.Empty;
    }
}

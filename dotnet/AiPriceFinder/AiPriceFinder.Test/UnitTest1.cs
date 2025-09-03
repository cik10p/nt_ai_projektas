namespace AiPriceFinder.Test
{
    public class UnitTest1
    {
        [Fact]
        public void ConvertResponse()
        {
            string exampleResp = "{\r\n  \"totalPrice\": 210000,\r\n  \"priceSqMetres\": 1400\r\n}";
            var respObj = System.Text.Json.JsonSerializer.Deserialize<Lambda_AiPriceFinder.PriceObjectResponse>(exampleResp);

            int expectedTotalPrice = 210000;

            Assert.NotNull(respObj);
            Assert.Equal(expectedTotalPrice, respObj.TotalPrice);
        }
    }
}
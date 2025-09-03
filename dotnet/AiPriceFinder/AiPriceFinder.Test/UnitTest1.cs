namespace AiPriceFinder.Test
{
    public class UnitTest1
    {
        [Fact]
        public void ConvertResponse()
        {
            string exampleResp = "{\"totalPrice\":170000,\"Currency\":\"EUR\",\"priceSqMetres\":1133,\"reasoning\":\"Vertinta pagal ~150 m² naudingą plotą; Vytėnų 2000–2010 m. renovuoti individualūs namai dažniausiai kainuoja ~1 000–1 300 €/m², o 2 kambariai ir granulinis šildymas mažina likvidumą, bet gera būklė ir miesto lokacija laiko kainą virš vidurkio.\",\"suggestion\":\"Įrengti efektyvesnį šildymą (oro–vandens siurblys) ir/ar saulės elektrinę bei perplanuoti į 3–4 kambarius; atnaujinti fasadą ir gerbūvį, kad pagerėtų pirmasis įspūdis.\"}";
            var respObj = System.Text.Json.JsonSerializer.Deserialize<Lambda_AiPriceFinder.PriceObjectResponse>(exampleResp);

            int expectedTotalPrice = 210000;

            Assert.NotNull(respObj);
            Assert.Equal(expectedTotalPrice, respObj.TotalPrice);
        }
    }
}
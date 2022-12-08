{cloud_pct , feels_like , humidity , max_temp , min_temp , sunrise , sunset , temp , wind_degrees , wind_speed}

  {
    data ? data.map(({cloud_pct , feels_like , humidity , max_temp , min_temp , sunrise , sunset ,temp , wind_degrees , wind_speed},id)=>(
        <VStack key={id}>
        <Button>Cloud_Pact : {cloud_pct}</Button>
        <Button>Feels_Like : {feels_like}</Button>
        <Button>Humidity : {humidity}</Button>
        <Button>Max_Temp : {max_temp}</Button>
        <Button>Min_Temp : {min_temp}</Button>
        <Button>Sunrise : {sunrise}</Button>
        <Button>Sunset : {sunset}</Button>
        <Button>Temp : {temp} °C</Button>
        <Button>Wind_Degrees : {wind_degrees}</Button>
        <Button>Wind_Speed : {wind_speed}</Button> 
        </VStack>
    )) :null
  }

     { data? <VStack mt={5}>
    <Button>Cloud_Pact : {data[0].cloud_pct}</Button>
    <Button>Humidity : {data[0].humidity } %</Button>
    <Button>Temp : {data[0].temp} °C</Button>
    </VStack> :null

  }
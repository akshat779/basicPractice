import React from "react";
import millify from "millify";
import { Typography,Row,Col,Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import News from "./News";
import CryptoCurrencies from "./CryptoCurrencies";


const {Title} = Typography;

const HomePage = () => {
    const {data,isFetching} = useGetCryptosQuery();
    const globalStats = data?.data?.stats
    console.log(globalStats)

    if(isFetching) return 'Loading...'
   
    return(
      <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}><Statistic title="Total Crypto Currencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(parseInt(globalStats.totalMarketCap))}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(parseInt(globalStats.total24hVolume))}/></Col>
        <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)}/></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Crypto Currencies in the World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <CryptoCurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified/>
      </>
    )
}

export default HomePage;
import React, { useState } from "react";
import millify from "millify";
import {Link} from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const CryptoCurrencies = () => {
    const {data: cryptosList,isFetching,error} = useGetCryptosQuery();
    const [cryptos,setCryptos] = useState(cryptosList?.data?.coins)

    console.log(cryptos)

    return(
        <>
        <Row gutter={[32,32]} className="crypto-card-container">
            {
                cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}> 
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card title={`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} alt="crypto"/>} hoverable>
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))
            }
        </Row>
        </>
    )
}

export default CryptoCurrencies;
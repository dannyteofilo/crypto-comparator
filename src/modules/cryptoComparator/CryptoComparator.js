import React, { useEffect, useState } from "react";
import { Button } from "../../components/button/Button";
import { CryptoInfo } from "../../components/cryptoInfo/CryptoInfo";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { providers } from "../../constants/constants";

export const CryptoComparator = () => {
  const [user, setUser] = useState({});
  const [provider, setProvider] = useState([]);
  const [typeCoin, setTypeCoin] = useState("btc");
  const [cryptoBTC, setCryptoBTC] = useState([]);
  const [cryptoETH, setCryptoETH] = useState([]);
  const [cryptoXRP, setCryptoXRP] = useState([]);
  const [compareCryptoBTC, setCompareCryptoBTC] = useState([]);
  const [compareCryptoETH, setCompareCryptoETH] = useState([]);
  const [compareCryptoXRP, setCompareCryptoXRP] = useState([]);
  const [currentTable, setCurrentTable] = useState([...cryptoBTC]);
  const [currentCompareTable, setCurrentCompareTable] = useState([
    ...compareCryptoBTC,
  ]);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    setUser(localUser);
    const currentProvider = [...defaultProviders()];
    currentProvider[0].active = true;
    setProvider(currentProvider);
  }, []);

  useEffect(() => {
    const current = provider.filter((a) => (a.active ? { ...a } : null));
    setTypeCoin(current.length !== 0 ? current[0].value : "btc");
  }, [provider]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const dateUpdate = Date().toLocaleString();
      const responseCoinGecko = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple"
      );
      const dataCoinGecko = await responseCoinGecko.json();
      const dataBTC = {
        coin: dataCoinGecko[0].current_price,
        date: dateUpdate,
      };
      const dataETH = {
        coin: dataCoinGecko[1].current_price,
        date: dateUpdate,
      };
      const dataXRP = {
        coin: dataCoinGecko[2].current_price,
        date: dateUpdate,
      };
      const arrBTC = [...cryptoBTC];
      const arrETH = [...cryptoETH];
      const arrXRP = [...cryptoXRP];
      arrBTC.push(dataBTC);
      arrETH.push(dataETH);
      arrXRP.push(dataXRP);
      setCryptoBTC(arrBTC);
      setCryptoETH(arrETH);
      setCryptoXRP(arrXRP);

      const responseCryptoCompare = await fetch(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD"
      );
      const dataCryptoCompare = await responseCryptoCompare.json();
      const compareDataBTC = {
        coin: dataCryptoCompare.BTC.USD,
        date: dateUpdate,
      };
      const compareDataETH = {
        coin: dataCryptoCompare.ETH.USD,
        date: dateUpdate,
      };
      const compareDataXRP = {
        coin: dataCryptoCompare.XRP.USD,
        date: dateUpdate,
      };
      const arrCompareBTC = [...compareCryptoBTC];
      const arrCompareETH = [...compareCryptoETH];
      const arrCompareXRP = [...compareCryptoXRP];
      arrCompareBTC.push(compareDataBTC);
      arrCompareETH.push(compareDataETH);
      arrCompareXRP.push(compareDataXRP);
      setCompareCryptoBTC(arrCompareBTC);
      setCompareCryptoETH(arrCompareETH);
      setCompareCryptoXRP(arrCompareXRP);
    }, 10000);
    return () => clearInterval(interval);
  }, [
    typeCoin,
    cryptoBTC,
    cryptoETH,
    cryptoXRP,
    compareCryptoBTC,
    compareCryptoETH,
    compareCryptoXRP,
  ]);

  useEffect(() => {
    if (typeCoin === "btc") {
      setCurrentTable([...cryptoBTC]);
      setCurrentCompareTable([...compareCryptoBTC]);
    } else if (typeCoin === "eth") {
      setCurrentTable([...cryptoETH]);
      setCurrentCompareTable([...compareCryptoETH]);
    } else {
      setCurrentTable([...cryptoXRP]);
      setCurrentCompareTable([...compareCryptoXRP]);
    }
  }, [
    typeCoin,
    cryptoBTC,
    cryptoETH,
    cryptoXRP,
    compareCryptoBTC,
    compareCryptoETH,
    compareCryptoXRP,
  ]);

  const defaultProviders = () => {
    return providers.map((a) => {
      return { ...a };
    });
  };

  const handleChange = (e) => {
    const currentProvider = [...defaultProviders()];
    currentProvider[e].active = true;
    setProvider(currentProvider);
  };

  return (
    <div className="container container-crypto">
      <UserInfo user={user} />
      <div className="user card">
        {provider.map((item, index) => (
          <Button
            key={index}
            title={item.title}
            active={item.active}
            click={handleChange}
            position={index}
          />
        ))}
      </div>
      <div className="tables">
        <CryptoInfo title="Gecko" data={currentTable} />
        <CryptoInfo title="CryptoCompare" data={currentCompareTable} />
      </div>
    </div>
  );
};

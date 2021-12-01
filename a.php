<?php
// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
$json = file_get_contents('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=2QISONGAQGTSBE2W');

$data = json_decode($json,true);

print_r($data);

exit;
https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=APPL&interval=5min&apikey=2QISONGAQGTSBE2W
https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=2QISONGAQGTSBE2W
https://www.alphavantage.co/query/?function=TIME_SERIES_INTRADAY&symbol=APPL&interval=5min&apikey=2QISONGAQGTSBE2W
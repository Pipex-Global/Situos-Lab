<?php
header('Content-Type:application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');

include_once('RssParser.php');

$rss = new RSSParser(array('url' => 'http://situos.diandian.com/rss'));

// 取最新5条项目
$news = $rss->getFeed(5);

echo json_encode(array('status' => 'ok', 'news' => $news));
exit();
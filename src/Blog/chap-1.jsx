import React from 'react';
import { Card } from 'react-bootstrap';

function Blog1() {
  return (
    <div className="blog1 d-flex justify-content-center">
      <Card style={{ width: '50rem', margin: '50px'}}>
        <Card.Body>
          <Card.Title><h3>はじめまして</h3></Card.Title>
          <Card.Subtitle className='mb-2 text-mute'>2023/03/29</Card.Subtitle>
          <Card.Text>
            <p>　はじめまして．とある大学生のDagechanです．なにかアウトプットできる場が
                欲しいなと思い自分のWebサイトを作りました．がっつりWeb系の知識があるわけで
                もないので，所々欠陥などがあるような気がします．．．
            </p>
            <p>
              　自己紹介と致しましては，私は先ほど書いたように大学生であり情報系の学部に所属
              しています．興味分野はOS関連です．といっても完璧な初学者で，最近では自作PCで
              デュアルブートしてUbuntu触ってウキウキしてました．今はそのUbuntuを使って武内氏の「試して
              理解 Linuxのしくみ」を読み進めて挙動を確認して遊んでる途中です．過去には内田氏の「ゼロから
              のOS自作入門」の学内輪読会に参加したりしていました（完全な実装は行っていない）．
            </p>
            <p>
              　他にはガジェットに興味があり気味です．どっぷりではないですが，よく新作のスナドラのニュース記事
              を見たり，ベンチマークをたまに見たりしています．apple製品は今まではあまり見ていませんでしたが，
              最近ipad（第8世代）を入手したことから徐々に見ていってる感じです．
            </p>
            <p>
              　また，筆者は陸上競技のスプリンターとしても活動しています．大学ではまだ思うような成果が出せて
              いませんが，何とか100mの10秒台スプリンターの域に到達したいものです．
            </p>
            <p>
              という感じで，纏まりのある自己紹介とはなりませんでしたが，ゆるく書いていきます．よろしくお願いします．
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      
      
      
    </div>
  );
}

export default Blog1;
import React from 'react';
//import { useTranslation } from 'react-i18next';
import style from './NFT.module.scss';
import Footer from 'components/base/Footer';
import FloatingHeader from 'components/base/FloatingHeader';

import Scale from 'components/assets/scale';

import Check from 'components/assets/check';
import Share from 'components/assets/share';
import Like from 'components/assets/heart';
import Eye from 'components/assets/eye';

import gradient from 'random-gradient';

import { shortString } from 'utils/strings';

const NFTPage: React.FC<any> = ({
  setExp,
  NFT,
  setModalExpand,
  setNotAvailable,
  user,
  type,
  nftMedia,
}) => {
  const bgGradientOwner = { background: gradient(NFT.ownerData.name) };
  const bgGradientCreator = { background: gradient(NFT.creatorData.name) };
  const bgGradient = { background: gradient(user.name) };

  function returnType() {
    if (nftMedia === null) return null;
    else if (type!.substr(0, 5) === 'image') {
      return <img className={style.NFTIMG} src={nftMedia} alt="imgnft" />;
    } else if (type!.substr(0, 5) === 'video')
      return (
        <video autoPlay muted loop className={style.NFTIMG}>
          <source id="outputVideo" src={nftMedia} type="video/mp4" />
        </video>
      );
  }

  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <div className={style.NFT}>
          {returnType()}
          <div onClick={() => setExp(1)} className={style.Scale}>
            <Scale className={style.ScaleSVG} />
          </div>
        </div>
        <div className={style.Text}>
          <div className={style.Top}>
            <h1 className={style.Title}>{NFT.name}</h1>
            <div className={style.TopInfos}>
              <div className={style.Views}>
                <Eye className={style.EyeSVG} />
                105
              </div>
              <div className={style.Like}>
                <Like className={style.LikeSVG} />
              </div>
              <div className={style.Share}>
                <Share className={style.ShareSVG} />
              </div>
            </div>
          </div>
          <div className={style.Line} />
          <div className={style.Hide}>
            <div className={style.Tags}>
              <div className={style.Tag}>
                <span role="img" className={style.Emoji} aria-label="art">
                  🎨
                </span>
                Design
              </div>
            </div>
          </div>
          <p className={style.Description}>{NFT.descripion}</p>
          <div className={style.Buy}>
            <div className={style.BuyLeft}>
              <div onClick={() => setExp(2)} className={style.Button}>
                Buy
              </div>
            </div>
            <div className={style.BuyRight}>
              <div className={style.Price}>
                {shortString(Number(NFT.price))} caps
              </div>
              <span className={style.FiatPrice}>13 500$</span>
            </div>
          </div>
          <div className={style.HistoryTop}>
            <div className={style.HistoryTitle}>History</div>
            <div className={style.HistoryLine} />
          </div>
          <div className={style.History}>
            <div className={style.HistoryItem}>
              <Check className={style.Check} />
              <div className={style.HistoryAvatar}>
                <div className={style.HistoryIMG} style={bgGradientCreator} />
              </div>
              <div className={style.HistoryUser}>
                <div className={style.HistoryRole}>Creator</div>
                <div className={style.HistoryName}>{NFT.creatorData.name}</div>
              </div>
            </div>
            <div className={style.HistoryItem}>
              <Check className={style.Check} />
              <div className={style.HistoryAvatar}>
                <div className={style.HistoryIMG} style={bgGradientOwner} />
              </div>
              <div className={style.HistoryUser}>
                <div className={style.HistoryRole}>Owner</div>
                <div className={style.HistoryName}>{NFT.ownerData.name}</div>
              </div>
            </div>
            <div className={style.HistoryItem}>
              <Check className={style.Check} />
              <div className={style.HistoryAvatar}>
                <div className={style.HistoryIMG} style={bgGradient} />
              </div>
              <div className={`${style.HistoryUser} ${style.HistoryPast}`}>
                <div className={style.HistoryRole}>Previous Owner</div>
                <div className={style.HistoryName}>Satoshi Nakamoto</div>
              </div>
            </div>
            <div className={style.HistoryItem}>
              <Check className={style.Check} />
              <div className={style.HistoryAvatar}>
                <div className={style.HistoryIMG} style={bgGradient} />
              </div>

              <div className={`${style.HistoryUser} ${style.HistoryPast}`}>
                <div className={style.HistoryRole}>Previous Owner</div>
                <div className={style.HistoryName}>Satoshi Nakamoto</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer setNotAvailable={setNotAvailable} />
      <FloatingHeader user={user} setModalExpand={setModalExpand} />
    </div>
  );
};

export default NFTPage;
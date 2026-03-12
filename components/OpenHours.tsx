import React, { useEffect, useState } from 'react';
import styles from '../styles/OpenHours.module.scss';

type OpenHoursData = {
  id: number;
  name: string;
  isActive: boolean;
  version: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  kitchenNotice: string;
};

type OpenHoursProps = {
  kitchenNotice?: boolean;
};

export const OpenHours = ({ kitchenNotice }: OpenHoursProps) => {
  const [data, setData] = useState<OpenHoursData | null>(null);

  useEffect(() => {
    fetch('https://api.tietokonepaja.fi/lok/open-hours')
      .then((res) => res.json())
      .then((items: OpenHoursData[]) => {
        const active = items.find((item) => item.isActive) ?? null;
        setData(active);
      });
  }, []);

  const paragraphs = data
    ? [data.paragraph1, data.paragraph2, data.paragraph3, data.paragraph4].filter(Boolean)
    : [];

  return (
    <>
      {paragraphs.map((text, i) => (
        <p key={i} className={styles.openHoursText}>{text}</p>
      ))}
      {kitchenNotice && data?.kitchenNotice && (
        <p className={styles.kitchenNotice}>{data.kitchenNotice}</p>
      )}

      <h2 className={styles.openHoursTitle}>Tervetuloa!</h2>
    </>
  );
};

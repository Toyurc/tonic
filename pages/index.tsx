import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Head>
        <title>Boldo Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Container className={styles.headerSection}>
          <nav className={styles.nav}>
            <Image
              src={'/icons/boldo-logo.svg'}
              alt={'boldo logo'}
              width={160}
              height={42}
            />
            <ul className={styles.navLinks}>
              <li>product</li>
              <li>services</li>
              <li>about</li>
            </ul>
            <Button buttonText={'login'} buttonType={'outline'} buttonSize={'md'} />
          </nav>
          <div className={styles.headSection}>
            <div className={styles.headerText}>
              <h1>Save time by building fast with Boldo Template</h1>
              <p>
                Funding handshake buyer business-to-business metrics iPad partnership.
                First mover advantage innovator success deployment non-disclosure.
              </p>
              <div className={styles.headerButtons}>
                <Button
                  buttonText={'buy template'}
                  buttonType={'solid'}
                  buttonSize={'lg'}
                />
                <Button buttonText={'explore'} buttonType={'outline'} buttonSize={'lg'} />
              </div>
            </div>
            <div className={styles.headerImages}>
              <Image
                src={'/icons/chart-lg.svg'}
                alt={'chart large'}
                width={494}
                height={232}
                className={styles.big}
              />
              <Image
                src={'/icons/chart-sm.svg'}
                alt={'chart small'}
                width={192}
                height={165}
                className={styles.small}
              />
              <Image
                src={'/icons/chart-md.svg'}
                alt={'chart medium'}
                width={260}
                height={165}
                className={styles.mid}
              />
            </div>
          </div>
          <div className={styles.marquee}>
            <Image
              src={'/icons/boldo-logo.svg'}
              alt={'boldo logo'}
              width={160}
              height={42}
            />
            <Image
              src={'/icons/presto-logo.svg'}
              alt={'presto logo'}
              width={160}
              height={42}
            />
            <Image
              src={'/icons/boldo-logo.svg'}
              alt={'boldo logo'}
              width={160}
              height={42}
            />
            <Image
              src={'/icons/presto-logo.svg'}
              alt={'presto logo'}
              width={160}
              height={42}
            />
            <Image
              src={'/icons/boldo-logo.svg'}
              alt={'boldo logo'}
              width={160}
              height={42}
            />
            <Image
              src={'/icons/presto-logo.svg'}
              alt={'presto logo'}
              width={160}
              height={42}
            />
          </div>
        </Container>
      </header>
      <Container className={styles.services}>
        <p>our services</p>
        <h2>Handshake infographic mass market crowdfunding iteration.</h2>
        <div className={styles.serviceCardSection}>
          <div className={styles.serviceCard}>
            <Image
              src={'/images/explore-1.png'}
              alt={'explore human'}
              width={300}
              height={345}
            />
            <p>cool feature title</p>
            <div className={styles.serviceExplore}>
              <span>Explore page</span>
              <Image
                src={'/icons/arrow-right.svg'}
                alt={'right arrow logo'}
                width={24}
                height={26}
              />
            </div>
          </div>

          <div className={styles.serviceCard}>
            <Image
              src={'/images/explore-2.png'}
              alt={'explore connection'}
              width={300}
              height={345}
            />
            <p>even cooler feature</p>
            <div className={styles.serviceExplore}>
              <span>Explore page</span>
              <Image
                src={'/icons/arrow-right.svg'}
                alt={'right arrow logo'}
                width={24}
                height={26}
              />
            </div>
          </div>

          <div className={styles.serviceCard}>
            <Image
              src={'/images/explore-3.png'}
              alt={'explore oppurtunity'}
              width={300}
              height={345}
            />
            <p>cool feature title</p>
            <div className={styles.serviceExplore}>
              <span>Explore page</span>
              <Image
                src={'/icons/arrow-right.svg'}
                alt={'right arrow logo'}
                width={24}
                height={26}
              />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles.customers}>
          <div className={styles.hang}>
            <Image
              src={'/images/human-1.png'}
              alt={'man on call'}
              width={494}
              height={506}
            />
            <Image
              className={styles.hangImage}
              src={'/images/stats-1.png'}
              alt={'stats'}
              width={291}
              height={388}
            />
          </div>
          <div className={styles.customersText}>
            <h3>
              We connect our customers with the best, and help them keep up-and stay open.
            </h3>
            <ul className={styles.customerList}>
              <li>
                <Image
                  src={'/icons/checkmark.svg'}
                  alt={'checkmark'}
                  width={36}
                  height={36}
                />
                <span>We connect our customers with the best.</span>
              </li>
              <li>
                <Image
                  src={'/icons/checkmark.svg'}
                  alt={'checkmark'}
                  width={36}
                  height={36}
                />
                <span>Advisor success customer launch party.</span>
              </li>
              <li>
                <Image
                  src={'/icons/checkmark.svg'}
                  alt={'checkmark'}
                  width={36}
                  height={36}
                />
                <span>Business-to-consumer long tail.</span>
              </li>
            </ul>
            <Button buttonText={'start now'} buttonType={'solid'} buttonSize={'md'} />
          </div>
        </div>
        <div className={styles.customers2}>
          <div className={styles.customersText}>
            <h3>
              We connect our customers with the best, and help them keep up-and stay open.
            </h3>
            <ul className={styles.customerList2}>
              <li>
                <Image src={'/icons/leaf.svg'} alt={'leaf'} width={36} height={36} />
                <span>We connect our customers with the best.</span>
              </li>
              <li>
                <Image src={'/icons/eye.svg'} alt={'eye'} width={36} height={36} />
                <span>Advisor success customer launch party.</span>
              </li>
              <li>
                <Image src={'/icons/sun.svg'} alt={'sun'} width={36} height={36} />
                <span>Business-to-consumer long tail.</span>
              </li>
            </ul>
          </div>
          <div className={styles.hang}>
            <Image
              src={'/images/human-2.png'}
              alt={'woman on call'}
              width={444}
              height={523}
            />
            <Image
              className={styles.hangImage}
              src={'/images/stats-2.png'}
              alt={'stats'}
              width={291}
              height={388}
            />
          </div>
        </div>
      </Container>
      <Container className={styles.enterprise}>
        <div className={styles.enterpriseText}>
          <h2>An enterprise template to ramp up your company website</h2>
          <div className={styles.arrows}>
            <Image
              src={'/icons/toggle-left.svg'}
              alt={'toggle left'}
              width={72}
              height={72}
            />
            <Image
              src={'/icons/toggle-right.svg'}
              alt={'toggle right'}
              width={72}
              height={72}
            />
          </div>
        </div>
        <div className={styles.enterpriseCards}>
          <div className={styles.enterpriseCard}>
            <h4>
              &quot;Buyer buzz partner network disruptive non-disclosure agreement
              business&quot;
            </h4>
            <div className={styles.enterpriseCardFooter}>
              <Image
                src={'/images/circle-1.png'}
                alt={'Albus dumbledore'}
                width={58}
                height={58}
              />
              <div className={styles.enterpriseCardFooterChild}>
                <p>Albus dumbledore</p>
                <p>Manager &#64; Howarts</p>
              </div>
            </div>
          </div>
          <div className={styles.enterpriseCard}>
            <h4>
              &quot;Learning curve infrastructure value proposition advisor strategy user
              experience hypotheses investor.&quot;
            </h4>
            <div className={styles.enterpriseCardFooter}>
              <Image
                src={'/images/circle-2.png'}
                alt={'severus snape'}
                width={58}
                height={58}
              />
              <div className={styles.enterpriseCardFooterChild}>
                <p>severus snape</p>
                <p>Manager &#64; slytherin</p>
              </div>
            </div>
          </div>
          <div className={styles.enterpriseCard}>
            <h4>
              &quot;Release facebook responsive web design business model canvas seed
              money monetization.&quot;
            </h4>
            <div className={styles.enterpriseCardFooter}>
              <Image
                src={'/images/circle-3.png'}
                alt={'harry potter'}
                width={58}
                height={58}
              />
              <div className={styles.enterpriseCardFooterChild}>
                <p>harry potter</p>
                <p>team leader &#64; Gryffindor</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className={styles.workLife}>
        <Image src={'/images/banner.png'} alt={'banner'} width={1144} height={403} />
        <div className={styles.workLifeText}>
          <h3>
            We connect our customers with the best, and help them keep up-and stay open.
          </h3>
          <div className={styles.workLifeList}>
            <div>
              <span>We connect our customers with the best?</span>
              <Image
                src={'/icons/arrow-down.svg'}
                alt={'arrow down logo'}
                width={18}
                height={18}
              />
            </div>
            <div>
              <span>Android research & development rockstar? </span>
              <Image
                src={'/icons/arrow-down.svg'}
                alt={'arrow down logo'}
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
      </Container>
      <Container className={styles.blog}>
        <p>our blog</p>
        <h2>Value proposition accelerator product management venture</h2>
        <div className={styles.blogCardSection}>
          <div className={styles.blogCard}>
            <Image
              src={'/images/manager-1.png'}
              alt={'boldo logo'}
              width={300}
              height={201}
            />
            <div className={styles.blogCardText}>
              <span>category</span>&nbsp;<span>november 22, 2021</span>
            </div>
            <p>Pitch termsheet backing validation focus release.</p>
            <div className={styles.blogCardFooter}>
              <Image
                src={'/images/circle-manager-1.png'}
                alt={'boldo logo'}
                width={32}
                height={32}
              />
              <span>chandler bing</span>
            </div>
          </div>
          <div className={styles.blogCard}>
            <Image
              src={'/images/manager-2.png'}
              alt={'boldo logo'}
              width={300}
              height={201}
            />
            <div className={styles.blogCardText}>
              <span>category</span>&nbsp;<span>november 22, 2021</span>
            </div>
            <p>
              Seed round direct mailing non-disclosure agreement graphical user interface
              rockstar.
            </p>
            <div className={styles.blogCardFooter}>
              <Image
                src={'/images/circle-manager-2.png'}
                alt={'boldo logo'}
                width={32}
                height={32}
              />
              <span>rachel green</span>
            </div>
          </div>
          <div className={styles.blogCard}>
            <Image
              src={'/images/manager-3.png'}
              alt={'boldo logo'}
              width={300}
              height={201}
            />
            <div className={styles.blogCardText}>
              <span>category</span>&nbsp;<span>november 22, 2021</span>
            </div>
            <p>
              Beta prototype sales iPad gen-z marketing network effects value proposition
            </p>
            <div className={styles.blogCardFooter}>
              <Image
                src={'/images/circle-manager-3.png'}
                alt={'boldo logo'}
                width={32}
                height={32}
              />
              <span>monica geller</span>
            </div>
          </div>
        </div>
        <Button buttonText={'load more'} buttonType={'outline'} buttonSize={'md'} />
      </Container>
      <Container>
        <div className={styles.newsletter}>
          <div className={styles.newsletterInput}>
            <h1>An enterprise template to ramp up your company website</h1>
            <div className={styles.inputSection}>
              <input
                className={styles.input}
                placeholder="your email address"
                type="email"
              />
              <Button
                buttonText={'start now'}
                buttonType={'outline'}
                buttonSize={'md'}
                className={styles.button}
              />
            </div>
          </div>
        </div>
      </Container>
      <footer>
        <Container className={styles.footer}>
          <div className={styles.rightSection}>
            <Image
              src={'/icons/boldo-logo.svg'}
              alt={'boldo logo'}
              width={156}
              height={41}
            />
            <p>
              Social media validation business model canvas graphical user interface
              launch party creative facebook iPad twitter.
            </p>
            <p>All rights reserved.</p>
          </div>
          <div className={styles.footerList}>
            <h3>landings</h3>
            <ul>
              <li>home</li>
              <li>products</li>
              <li>services</li>
            </ul>
          </div>
          <div className={styles.footerList}>
            <h3>company</h3>
            <ul>
              <li>home</li>
              <li className={styles.hiring}>
                careers <div className={styles.hiringSection}>hiring!</div>
              </li>
              <li>services</li>
            </ul>
          </div>
          <div className={styles.footerList}>
            <h3>resources</h3>
            <ul>
              <li>blog</li>
              <li>products</li>
              <li>services</li>
            </ul>
          </div>
        </Container>
      </footer>
    </main>
  );
}

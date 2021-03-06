import React from "react";
import PostList from "../PostList";
import "./style.css";

export default function TimeLine() {
  return (
    <React.Fragment>
      <div className="wrapper-content content">
        <aside class="profile">
          <img src="https://www.onbusca.com.br/wp-content/uploads/2017/05/onbusca-academy-fundo.png"></img>
          <img
            id="avatar"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBANEBANDQ0NDRUNDQ8QEA4NGB0WFhUdEx8YHDQgGRonJxUVJTEhMSorLi8vFx8/RDU4QyotLjcBCgoKDg0OFQ0OFSsZFRkrLTcrKy0rKystLS0rKysrKystLS0rKys3LTctLSstKysrKysrKy0tKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAABAUGBwIDCAH/xABBEAABAwIDBQUDCQcEAwEAAAABAAIDBBEFITEGEkFRYQcTcYGRIqGxCBQjMkJSYnLBM5KistHh8CRTc8I0Q3QV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAgMAAgMBAAAAAAAAAAECESExAxJBUWETInEE/9oADAMBAAIRAxEAPwC5HrSUkqQQcibeaROqHNvmVlvfKPujy0razqExNrXjj68ktirieR8Qg9HMC61kf50SYVh5D36LU+uzzCKfByjA9yHRDkPckLMRAzIK3DEWHI3F+aDbXUzTwtppySiOMAWGi1MmaRcELe0jgQliZHW0e+NQm12GPFrWPgn5+ixT0RgdSOF7gpxw1hF7g/V4pU8cluYFMnJ7M9Y3VJeHx8FIXMB1A9FAO2HaIYfQ3i3RPUP7qL8I1cfRaaTYjm3faBFR3hju+bdOTSCGnhvKpMX2xrqrKWY2tazAGi3kmOeVz3Fz3FznEklxuSVqVa0NPSfVeIQqMtw3E56Z4fBLJE4EZscRcdbahW3sV20SNHd4id+2TJGM9o/m9ypdehAdl0ONMmjZI0Ete0OB6HNKxWt6hUR2P7Y3IoZ3aD/TuJ48Qb+SuQNPqs7dA7NqW8/VepqAQl7DRRNAXAZZhN9TSOtof7J7I4rwAKJNcD9o13JHArZCDxv6FPb2WWAaE9C3ZGBotM7cvBPUTRyHoiSBp+yE7ExHrLFwPVPvzVh4eixdhzDzHgVKyOjfcEFKqN9iPHNZxUQaciVmyls691Ors22tcQwkG1vgmkYi8aG9uae5W3aRzFvNMMlG8X9k+SvLaW6PEXHUBONFU7/CyZmRkag+icsLGvgpx7MpkrGt1vldc1dtm0PzvETG0/RUjO7Z+c2Lifd6K+8el3I5Xfda4+Wa5KxGcySyvJuXySOJ8SVtiRMlNPQyyfUY53gClGB0ffTMbwuL+Cu3BsIjjY0Bjb2GdgrVjjtSDsHqR/6Zf3CvRgtRYnun5cwV0XHRtItZvoNOi9OGMOW4LcrJq/irmeSJzTYggjmCta6LqdkqV+8TE07wscgoTtZ2fs3d6mbuuF8hxHVBXCxWFNO6N7XsNnMIc08ius+z7HW4jh8FQQN/d7uYAZNlbk63uXKFdRPheWSAgjnyV1/J6xsiKppXC7WPbM08i7Ij3KbNxC5zA08AheNqGoUagNkFeeQSqOfI5eSY4TbmnCmfx9fBZ72bdLVi2hSdte06g/3Wyoi48Dpb9U2zR2PQ/FNJ2grW8UrbVM5hRxhtzS6N+QT2V7OTZ231HmtjZhwI9QmWa91rcT8FOzSDfHRbAo22YgjM9M06PmdYEE8EvZc6OawstVLISM0iqa5zHEWB15q7lwRc5gzCziaANE2wV9zmOHBLaWoDuY8VOPYpFtJEDS1Fmgu7iW2utieC42fqurtpsQkLzGwkM+oRmN4m99FzXtPgxp618ABs54Md/uu0WuNO408dn+Glz+9IyBy8lbtD5cFEMLiZSU7Q4gBjQSeHMrQ3b+lYbe262VwMvLonu1vjrCcrNpC3ilbGt4KA4Rt9QyENdIGHQb+Q96m1JPHI0Oje14NrFpB+C00ftKVuYAsfmzH5GxvzRMLC5sMhxWhtW1t7uGdrWslosqiXajsvA+iklYwCWIB1xqR1UV7AWO+d1RF90U7A7829l8HKb7a4g11HUMBzdE701TX8nGj+irpyBZ8sMTTbUtBcbfvBPPpz2aq12t9yEv3RyCFz2A2d2OAHDgt0TG8gknztvP3cFmyrbzCgy8xA5WyWmahYRa2iziqWniPXgtpcNbj14Jlo2OoW9Vtho26XPmlEzhrcLFrxcZ+8KirCahvofctL8P43Ccwf8yWBKMoIaTh7uFuiVsgduWIzsf6pWD716xRZwcaqNpGoSDFYzvZDnoCnhixkaq1wPqPULDx66pzw45nzSsRi+g9AsoowNBzSxl2aG4ybTm+mbh+bMKtds9nnvr6WaxcCR3h4ADMK49o8ODm74GbNerVDMWNiANAfZ8Fr1HRNZSGCvow9u6QCMsjoTooLi+FStdJuNja1rTutDA7fdll0VpUUW87rlySjEMADhfIX5owp54eymG7Ol8ZlG45glbGBumKRxtdx3fug5KyezmIwtMTci25LXE69FlLgQbmSLjkCt+BUpZLcEkm99dFfvYnHxcm7tE2jq2HuoHhpy37C5v0VbSYrWkgvq5GnPd3y4AkZG2XDNWXiNGXTvPFzrtPFpGlk0O2acXOJDvabI3Mkizjd1gfqkqscvyjPC74MVDjNSWTxTu7xroJCxwN7m1rE+atTsKeYqERFlhI59Rvcbk7ufoFBZtnO6p3Qxj2pGlrbnQlW3sFhnzelbcX3WNjabagZXHndZ5XhHr+UoqKxrMuPw8V4mSs3iTk7PpwXqxtKExK8a5Ohw9vM+5a5MPbzKzqiWB5BuneneHAg6H4pC2jGWZS2nprfa8FUpUnqGGxGeXxTeXHmRZSKam3uV+Jsm2fDje4Iz5qqTXTSm2pHms3SvHErGOieDw8ludSv5X80fE9VpNU8aErZSVri6xIt+qxNK7PIrR3Dw4EA9clJw7fOC11iBYr2tqtyxtcELVOCd02OdifHVYYk27GnlcJ43hVZU+IhzgLHPqlcE4NxnkmCjH0jfFO1Kfaf4FGN5IokqGZg53yN+SgG1zGtkaIzdpu6x4HTLopXKVDNqHgyE5HdHtZjLTVXtfiuqS4fUbrwCnqrxdrWWtvOOQCjIfk13Detcc1trTJG3vI2d6ABvAGzt3otMW+2ytqn3Bc4bvHdGnK6ccAdC69nC4vqm7C5HVLd5tNKbEA6X5LOfD2Czt2aIuuLbjrutrayv1V7vMYdGJCWuaSCLi/HonbDCxzeGXA2yKi9UKeOx37G+ReCL/3W+iqXE77SHNLS1xbpfMhTo/Yrq4O9q4oW6vOVueas2mhEUbIxoxob5qB7DG76mrdmWgU8Nx9rV9vcpLJiTzlcenFZZ3XDlyu6dn56oTWysd09ELH2I47w5j1QCOiSV9CWe0y5byz9n+ybg88z6otV/h4f4rZE/mmMyHMElYtmcDfePqo9tU/XaVsdkiRtwmCGrdlYkjxTrDMXC187XHit5ltnZp6Mrra0ppqKl4OvP1Xkdc/mCn0VO5/zwWJGvRIBXO6LGWuItkDfx1Soh1ZmPBZStBbp8E34fW79xaxtklUdRdrsvqgpY66FYiMZGwvfot0TQCTbW6gu03aVRYfZshfJLqI4d0ut+Lg1U9tr2p1teXMic+lpnZd3E/23j8bhmfBPHC72LU77W+0NtNekoHsdM64nkY4O7gaWb+P4KObAMfJRyue5z3TSvcS9xc48MyfBVfTwOkdYdSSeA6q49jKfu6eNg+779StdaX4putuH1A9qN3P38E94bOPqnwITPjVGWOErQc7b1lpw/E7PFwBp66ojTekljgfG/vIXmO+oaTZw1UhZj8rGN3o43kN1uQSfRM9HKHW3dDwSiphIzJOmi1iuL8RraCV1a5sckcccbHb3sNsXHK1z5FJ6mqA3aWmYN95EbS0cdPVK8ZqAxrnZXsQ3qeiftgdmO4Aq6i3fSN3omm30TTnc/iWWVTldcQ8YbgrqeCOEEew32jf6zzm4rcKB3T1Tk+S54WWxjbrnvLP9m+OhfyHqhPjG2XiqYxNye+Kaq7DMy6O3UdeidSi6z38onCOGif0WqShf0UhnhvmNUhkHqoymmuN2a44Hjh8E5UgeOHgtEjh/nJQbartXgoJTBHC6okZ+13ZAxsZ5XsfaVePduizmliYhTFw3gNQb+KZ5xuAl9mNGpcQ0DzVOY7214hNdtOyGmYQR9USyersh6KBYpj9XVG9RUTzdJJCW+mi6ZhWO3Q1Ztrh0GUlXDcahjt938KjuJdruHsFomVExHEMDG+e8bqibouq9J9C05O2edj96ClhHLvnvf6htk2VnbBir97u3QQB4IPdQg5dC8lV8hOYyDbbUTukc573Fz3kucXG5J6rUhCoj1sy27nj8LT6FW9s0z2G5aNAChHY5Qx1VTU0jx7U9G50LvuSsc1w+JVmYdQugPduBBYS0jkf6Kco28VK56cPaWm1iOKiOJYI8EujzscgFP2MFkmmhHLim0ym0OwzGpKfKRjgRzBTlJtewtNz6p0qaeNzTvAef6KKVuHMe+zW5XF7LT24ZaspvxXFj3b6ggbkQL4wdHvytdTTZDa1uJQh4O7KyzZ4wfqOysW/hOarbtBcWwNjY32N9veEDIDMtv/nBRDZ/GpaKoZPEc2mzgTlJH9pruiyzx3E+3Lp2EngT707UkbjxPXVNeydZT11NHUwPLmyAbwNt6N32mu6p+mlbE25IAHvK5tevZ730T4vibaeO9wXHJoPPmUKOVUDqiQvc4kZ2voBwshTc2k8XCZh/NeleuatZuOoWWW5xWTO6T1tOXt9k7rhof6rbvcl7vKZl8PmdKv7Rdo5cPpn/AGZZD3Ud+ZvmOehXPM0rnOLnEuc4lziTmSdbq1PlBYyJa2CmacqWEufb/cksfgB6qpyu7wYax2WeW6EIQtkBCEIAQhCAEIQgJR2Z4p81xWilJDWmobFITp3cnsOv+8uosYwwSfSNHtgWP4guOIyQbjUEEeK7E2OxMVdBSVAv9LTxudf74G66/mCnehLqmFuWXJanuv8A25J7x3BN8mWK4dq9o+11HVRiR7oz7QJHGyl045bgq4zY2TU+HdBNjc3Uhjlic0kZpqxEizgARcHdT2O0Uw+lbWTVsDxeNsUPrvBlx19tVPitE6nmlhd9aGR8Z8iuhezzAXf6uZwykMULOpBLnf8AVU/2s0Xc4tUt+/3Uv7zQf6rW2XD9uTrKwxYJj9VRSCWmnkhcDnuOO678w0crMwXteMzmMxBoaBYd5ADu34lzf6eip9egrnywl7XLp1phVTDUxB9O9kkRGTmEEHhw0QuYcA2jq6GQSU0z4zxAN2OH4mnIoXNl/wA1t4rf+d2QViV6vCozrGNT/Qpsx3Fo6SnlqJTushYXu68gOZTo9oK5+7ctqzLP8wideOnIdOQT7UvAHw+JUePx3LLUXLJNq62kxZ1ZVT1LxYzyOfb7rfsj0smxekrxejJrhneQhCEyCEIQAhCEAIQhBvQuluwPEu9woRXuaWoliP5TZ7fiVzSrv+TdW511PfhBOPH2mn9FXcqV4pmxnBWy3cywf10d4p5QoVLZeFef/nljy0tIdytx6dEthwCSawILG5XLgdOgPFTXdGthfwXqOF3y3WiSho2QRtjYPZb6k8SVz58oKj3cQimAympg09XNJHwLV0aVSvyjKH6Gjnt9SaWI+DgHD+QqseWN7UShCElBCEIDqrA9tGvIjqAGOyAeL7pP4uSmDHhwBBBBsQRyTX81YDkxg8GhKGu3RfgB5WXFfFlPrezG8wz9oO0jcNoZZyQZCO6gB+1Kb7tvDXyXJ9VO6R7pHuLnyOc95OrnHMkqw+2vaw1tWKZhtDQ7zCPvzn65PhkPVVst/Dh6zbG/gIQhbEEIQgBCEIAQhCAEIQgwrR+T5VbmKPYT+2o5Wjq5pY4fByq5TPshqO7xmhPB0r4z13mOb8SFePVTXVyEIWZhCEIAVa9vlMHYQXf7VVTv9SWf9lZShna9S97g1aPuRsl/cc136J49prlIrxeuC8TUELNjUKdqmNdUTba0o0bKeOTRp5lRva/tKigpn91HIZJAWx7xbYOzzNuH9EwTMHXh6Kt9sK3vJiwfViyP5uKwwzuV01ykkMc0pe4ucSXOJc4ni45la0IXQwCEIQAhCEAIQhACEIQAhCEAJ82Kqu5xGik+5W0x8t4D9UxpwwJ1qmnPKpgP8TVpgVdooQhZGEIQgBR/b+LfwvEG/eoakee6VIE27SRb9HVN+9Szj+Fyc7KuMnrFZO/QLwJ5dnG+FmV/RCx3sl4s3RMpJp1TtDRUNFSzTuhjtDE59jfM2JAHU/quV6mYve951e5zj0JN1dPbptVFJBFSQSB/ev35t29gxugPnb0VIqpJOmOVrxCEJpCEIQAhCEAIQhACEIQAhCEB6leFft4f+aL1uEjSvC/20P8AzRfELTDsnawQgIWRhCEIASXExeGUc4pR/CUqSatPsOHNrgfCxTnacrqOKpBY25ZLBKsRbaWUcpZB7ykpVZdnBdCEKdK2fdsajfqXZ3DWtaLJiQhTj1Bl2EIQqIIQhACEIQAhCEAIQhACEIQAluC/+RT/AP0Q/wAwQhXiTtQIQhZmEIQgBN+JPs09QUIWnin9ox814ce4221TOOVRN/MUgQhGfdazoIQhQb//2Q=="
          ></img>
          <b>Robson Locatelli</b>
          <span>
            Desenvolvedor na Resolute IT Tecnologia da Informação Ltda
          </span>
          <div id="visualization">
            <ul>
              <li>
                <p>Quem viu seu perfil</p>
                <label>46</label>
              </li>
              <li>
                <p>Viram sua publicação</p>
                <label>523</label>
              </li>
            </ul>
            <div id="upgrade-tool">
              <a href="#">Acesse ferramentas e informações Exclusivas</a>
              <h4>1 mês de Premium grátis</h4>
            </div>
          </div>

          <div id="save-items">
            <h4>Itens Salvos</h4>
          </div>
        </aside>
        <PostList />
        <aside class="widgets">
          <p>widgets aqui !</p>
        </aside>
      </div>
    </React.Fragment>
  );
}

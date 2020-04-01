import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';
import img9 from './img9.jpg';
// import img10 from './img10.jpg';
// import img11 from './img11.jpg';
// import img12 from './img12.jpg';

export class HomePage extends Component {
    render() {
        return (
            <div className="container">
            <h2><center>Selamat Datang di Website ini!</center></h2>
            <h3><center>Temukan Lirik Lagu Kesukaan anda</center></h3>
            <div>
            <center><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAAD+/v4BAQH4+Pj7+/v09PTY2Njr6+vi4uKurq7y8vLl5eXAwMAmJibX19e4uLiWlpbOzs5NTU2BgYErKythYWExMTF4eHi6urqcnJzLy8uysrJEREQ2NjZVVVWlpaVvb28VFRVpaWmLi4tAQEAcHBxjY2N+fn4XFxdZWVkODg4gICCQkJD6h+hqAAAXQklEQVR4nO0dCWOivDIEEFDxvuqJVduutv//773MkRBodwUFj+913tvdr1aSmWQydwYhfuEXfuEXfuEXfuEXfuEX/m9A6j8A90amYkB6smRJotP8uRNmV4I0O/bPTTv7hccFG3M/HDT3k/XUguFs3uuGnv4qff+O6JYEYD7exCjub4evzl/gdNj2F20fn3mazdS0KWgvZwdDjJsjzvp5PWtG/OyjUyhT3vQWow6TgvADjfwr+s8/u2WIQxDL3pmQvwKgByzXiLdv1j6532n7kczhPMJB/MelkKA7O31nxc/VbjRvxosgIhjEy/loN+zkvrlKYCdJg5j/PwjwGWokK8LXbNxpOFoOWGp+Ay/sLvcsiXgrdzFp0Ic7lr6v0IlGWb4b75pdiza/0W4H3SBQf9rthp9+3k1245TI6TxEZn0k4UqIdN8zB2wzDzQRfnuhFOJqbKuN1876OJvHAa+A7PZXKbt+RFmNelcgda32b2sLlWMzpF/70XK/+fyHpDmtPpoRLUWUEJEwyDZivfoAgAvd3joGOWfVbOFvvG4y+ZOVmS5rD9e1VIXjvL2zSoy+xnojt9GDHEXAwdunksIZBfh5a7nVGjHdsDxlNqz6+KAfD/VSzVriAUxzILB3MpRMkwZ8Gi4nhiYSrT/R9O3DAyoL0d1qGue+YAfkbvSp/0VDc/4OKOm9eGKxrAVvnelhtTpMO28/EKuVxQLGjT54BaaxuCOvoqjzvwyDrgAb0d5riZmyozKwX7pRy2NEpRe2g0Xza2Zp/JR110sQr3iw4aNJeDfHQ4IGDNaa39Yv8GF3l9+dYX/RSp/JoeqFi2R2OOUeeZsDq3eH/GPzLiSyruoTgynLuQmfDo7MnLwj4xFTZ1xhIzZshd7oJttpyq7q79c+PBd3aLRhW4dAbkyhCIeallFL05fK1M6oqz0/Iw1/CGbwRzJq7k7W86fEJxmNP/VuvY2kimM+Kc6hqz4L3vWP+Nds4BviNGo6HGV+ELyn2qiNZ5pIYABg++6Uftr6N91B4reRZqm5+iicZc7esiGEJQOL4Ebf9WLL9Nsone/zNk6jW/oZgHljw/x0UHra7zuWcph1i8Sg8mMKzcxh/82cx736eeFqgXMr3Q9Wv+i+MRJfgEMn5a1PlBEZfiw1Npq5LytN41ipx9aROP/jVrIGkIh5A/8AAtvUOuk0PWGfvAvGpo0fbDSrfvhaZDvHxm1IVJO88I5t1H71Upvs0LuCOHsCGGJx4Ek6XRRqaBOGN+BTmL7HOzhSkmFr1EPnpbIQNm1kPGYalSjDU+E6b0H9WsMicKknBgI7S7/SyXGltABTKj9c00QBM0ltVKrhuzztQIi5YdC5X7GBTCo3fOcZYuEN6TBGNTOqUhOfuJinwOLQWVhD0IGG6/F69oXcIIkHv27FiGTBmQ/GTOAGPdfKg2NsxbZ2RKISpGQVbsnmrw0CZJVDg2w2kKO92tQU+75NYs9OW3zgfyzq1BlSjICsgwfT4gZuG7Ckfn1zQpBrTaexi6LHOdbIpYoOsDZWntDW4sCsdH1zKjf7g6Zr4rF0WuefumAefcqURNv4YkSLuq9Ew5+bGmZYEokJxExmoqbcsRqzFYh4/eWDllDwNriJ10YyunvCRU2Uj5VJ4VU6kfA3J2SQBU720biNJcxqCN1tsG/wJ69ylYHDThSHQvwB8549cbuwAnHKyGh8/8upPFwMo6GTq2xEj5zTm4YVSG2cCIFQLXGnVbENpQZj8QnWaDKgUFJ1E5yZnrex0ZsvWyIhlexVSqIyIubaYdtDOFPWc9j/Amxr4z/BkGNBh0aFJKqBmmn45PQe3icpBDT2NRYuyITK8JAgPs3IYBneJ8wO9o2jI3quwqM6Chsnq+xgKO6WXtcBFCZzVN1S90wkTf0T3i1Vgmc/dUrRCK9mXDWqq1lDeb53zHbB1KP0wKyqGlWpQleHs5v3TefB1DvexKo8fukL79Ow6P6+mWessGmk4efB9ScRh+wZAncUEL4fSJY2DP3rFxxHHOsBV7dNkPwNH/RSSTc3rrYepWRzZjjqN2N5r3RsFiXR3m7WJ+Sq7fUUKkMXCGzqwR8AEAs/XEwIsStJVA+/q6Wa1RAuvBRSPPYOxYivG4783fmNbe1/gsncvQBq0ysCqBSxXGOWq1pf5WoACr2ett0uX3ogio35w538ib+CFLpWg3IZF0WmgMBI29tO95FIlJTjo4qrYcq3ZUfxITbDhvzmQeSMBowbcWKvJy4kkNeJKGw/1EFE5FpvbKB2POSvC0gUfkeX3vUfQdfbII31hmHUi7AjMUOrtJLisrNcG6BwmbCQePUvJDDUa3S1Wq0FlPVGBLpOcoEYpAgpOyn7R5KjBJQy2TOTfXoXERhoHv30HpBCNLEggOSyeVrycaBwo7dw+XgEIlCUE5FclxSluD4D4xU+ilORB9iGNW9D+aAUKXu3olBBPQDidMl15LuySOIpJHh/VAJJCa65hLqs4SzF1o5nPSaJmaDNvNRJlBjQIthVnamrDpBCf5xKi+JPopBiQdoVdeTMqwLJVWhOWhBW7DkoSSAKJ5cZtTcD3ESUNXtRKs4ZOakUflzyhBDSpDan5WqSE12l/rCHkAG8KNvXL/wUVx6jOfPYFKr/8R2iftHDBM809D2WKlPJtQAW22hpWnwP9TP3S/cWBgzDHxzObBZ8RnLVE5XJPjxIkBpo1vQKKjagcEcCuOM9+hYCoCfsMscVRFjS1eoK8h43AEBwTaWSxcPyIR/D+BkoFJz55oBgATaVwhSX3OJ+w/XAFRoK35dCewhfSVJ1Xzt+14NkE8zF8pNCW6hUqPugAaifQOHod3ATi5X6wCqw2d17CiZFoHtSp1aRPVEUQqgbHqj79kaF8EGCo1DAhSLBeBvXex4K5yYqeP67FGVzUdA8D4VLonBfkMIXx3J+nwE4WuPCXYxCXNrn28pPROGCKJwW2kNUFkDi1xNRGBCFbhHRIeH2Fu5h/9kodNBuK/Bt5eBjkLX5bBQWrDaQdLnJeS4KI6YwLvRtsTaeRe24VQOczHUhVVrk294fOoeLmvGqDnSI3gXpWODbOjpXURX1DUAZmtwVZ1SIwvC5KKR891qHzoo8ED0xhbvzHiKFH5/pHEr8w41EC5ht0jcxjCehEID3EGvcCny593QUKs7kNkzDAl9Nb3E9E4V6D8/eMZGmcv2pKFSMNy3IpdIuNFo8kQfsd4jCTQFJw9dhn8tqkx7fWnovEMOG4nyyYgsFPR4ClKV5IqR3BTogSIrMufqOxTOAtjRd5+P8rkijPJ3kifZQF4oWCGJbFBbOGt8dTMU9ZeXPMak2S6FT2bfvMpc/kmuM8l9HMT7Cc8iRsiDgq0C5wdKu+Y8AGhdT8n0+MiGFaSo6i5uZii+kD3tW3uMKoqR+JrmbFVjN1BjoEC+0WTq7/Kas1JkMuJUvme+Z5OOtK8GkrQTSc4J/t6d7tjQhfjY7i9jCXEFdqRN5inmdqApFeN1lfz9feLcu56PZvHYQRCE3DdV/N0EmmpYPBeyUlMJOC9TohM8uNPQPPjhY8Kd5YxLVufCb3Dv7c5JgFg0PSzhBqb/nPXQ655lrkd539yiPiE1vYcQPJ4XbBsQhIba2Zj/FtMBtSuDPjaXpJOeMaZnW7DlO+MWF0F/Yk3FnOgjW3nLrO1qNjmMQ0zdA2hOjBU3V/dlSYR0PRlgsHN2joc0iKG0eMb3teyhGdHVEz46tTbFQ38U4sO5DfL7qXv36y1C49PSOnXxhBLKeo1jhQ0XgvRnOIoz2wo9aGpWI6vBcrFX498JLqmtg2Avd8zaZ76LQcTJzUHl0vVQa28I6O/q8vTuzEZ2bN7+rkYrFOXNE2kbNUQc0Nopz3ZZ91NVgb95tKNQ2S5bCBWzEyye3k0m0AmgXsEvxJNL3P7FBgzJukOb53skCvhamZvMG8Y0CscwxqdMCbLYLFnoH/vW0QFhCCpkqjEhs1d9fHjZLWw9yFMbhqFB1x5UUKhH36ic5Cqd4WWaITDYUPY3w+WpRso28T745moiuM2vrxj5Brj18Ejlu3ZX8knyduJlj0m2LGyl1p68N01m8yA0tuhR9ZAqngzZUpcLmKb5dHLMUfrWV6o3qZlRvCgXOTftVC+o/lzHHnYQfWoZIVLBiSHw5uh2NswqETj9mp1GiFi44/qnz5h7gsoVJvzLnEPQD9lMAChvpi8Gc8fnOJGzC9/T9ZoCA04/OpJ0VaB9AYZFcyBUUYqGM6zRzXDqmwjRo97VJMcXqkWLFGKa1F2ibtZRr4lkx/kYhBaxqoxDLs6Aau5ndwxn15joK0xkLoWADJEn3a1NIdBelsJ+hcNai1WvnfMfqCNRXBE9eVpY6Mcn1nbn1RNAueGLSLLBmCZbGg8D6FGqk17iAx7o8KdMPYEJtTFLwSDePrHZDsBCNwkN7ToaUmCnui4xZs0G/kyzUGrYQ1Ba7oy+64pXhXVDn/QT7KpiPD6IYIiBs7AMHofKJWUpL2HQkn5LX6hU/BYP2eqLUOyKK2UYeWLLPxXBwMSaVVk80ghA76SsrLmvWhOSHuDVUwMn0Lgx2x+lkJm6wvex92QRS14AiGVJgD4sdQVxyqUMoM2/cjDldgJWr1VKIS7ah6m11vLJ66h2bKYDRlhLuFogjZkZvDdNnlcJgfnkR23QmcMboJEJisuqTKNN3TMwzvik4vB4RnCwMiq6+OlEQC4nlexYEVDa8t70YxbVSl5DThZxqCdQpwbEvbWTUbJLz8KH9ZrBy3Q5Rv20sWvYktFbAlumnkENNaAU7Fat9KY3PtxTpVTqEHTTngsp82ydfinJ9huDuU9rSU3mKkjYvTHtlwCTKzRdTilYl1fEpReobXHsGmfnEJtCJETOlK+apqrjgFS1S2nFFxYUH0nxZZzsSuv74rcJXpOALWz/4eHWF6dtI0JF8tzkcm6U++OWNDonhQ7NGEwpszWw2dahynG37eYWeouTraNhoNi1/IWr2LEl3egfcy9o+SGFuJRB/+sA1nTTLTx83TJTxD3ZQroZCYeqUseh3bS+qE7DFNdAb4F7a9sGqO8FzNneQZxbWZKiMqaTYtEuvANQguvIM3raUcR+UaUZbOrZ0ZPuytYXGpa+GEVbkJY6En3l7ofI5ERvXJV+4Ggq5P5KyBxvSaszGen1HpyJNxmwv4x3ckCRl9QAZ59MXdvYCZA82hTWbWAWBaYoPGuvkAmCNBr1EwMpjlOqmYM8DkiM1wUc0VZxj07UwLaihmWgFBMI6DamWfk2NgGyY8TtLZinhm8tXVtqdyhUTHvBQ63tfDAsB77vAT+aV6ES217RbltvCBcQv1K/aE4NFfLmekrqaCqFH5IJDYQekwCRlm+PkVSFrODlEQQrJp07DlBnmmNozb5fHwjJlfGDJo5hOMjkElzYRjA6slK9gE9OWM4Gw2nERzOHKEijA1J65qm95Gh2mCcHDGNv5N4C1wPJOTJF41+4hPr2CKcG88ClpaU3WgmvmSrLLtD11cI2Ag0f7RpzuKUK1yJmJmO/hgMrVl1CkMNeWlUno5xxDZQjTsewZv4kW+KoZQ0OhYvgdBqAyeTaXOomtUDYUyYycmdCYMMh9H5mZ1OqiSdVBK4M+7V9pLVLQmadY0gq27dNPbykikede39qNYsDYjjJUTBraRx5qZSiosLTWOLp2D82NUgdjWZBN/rJjeABjqNTYIYnX5r592kLXpb3pW7Og6YjNy8bW52Vb0f1AYVrJByY8HMGTJ7I5ZydJhd5VuW8rF/oK/pBnh4VceJfVihjlj5n/+iuEUog00r0TWGKzzKwtxorI13KKFF39czLJCt1J2N7IBNnJID9puaYl6XUESqtYEZgegs/TzPkgMUtlKhe6auls+gCMoX7On2aTXQHJmcRET69cUJqThJsGVhix2GYpxOY31Nd3c8XBSK1QTPf0slt4BA4CkR6lE/eLhUj/SaGQJmmAHi8w48b4b/Q5ueL82RWbyGJNedqYCLQyg7Su6Oo07Xj19a1jpc7hMSUJKYzAdtpMvHmDm3h5n0UpdB5iqRnWCnt1KOrVkZ5jSfer7WDcwzSdSDYbUBHnKNyk37u02YRyuQPaQvSaSG46hpyExm/aYZsK4gpQAWiLGuVh4I528yyEAUs6sBdmMax8SdO4UCko7w3ql8YZh7GSl6PJbDpRmRUdNN2WWQTA6qbw8MWNeyTxn+u8YnuqQ15cB7TCQfrZsJr4nhRaRyEsqD9PxL2ZUugL0dJvW78w8tUkxPtg2uTMe2UrbskG5pg0Hf5KQNo1p64zoUKprX0c8BcQ8aJuDB2/fAQaJ+JtCykNbdeXKNZHW/RFMxS9sbeqyJcVzMDdGxE90xyFR3zVLPxX75LjQerGpeoO1O1WhgSdU1DwOp1BO1hVaE+aEwYDj2g1t5lyTMSiR01BMdlWPsiOUWCXgwY5215xDk4aYy9Pl09FddUD3L1cLymnZ6KsLABoacwuuCRNjEnLQ+avvXoD3MKJVaT4Vml/IEgFvVo+Z5dO4ktWnEIinSNXu3IMZOqUKNMp5DAnxY6iQeaSqXitutA8VU9wwj0qfMsaNlyOzPZP6ZdFSJ0dgGza0clRSFu4M+W9qJL8CgnUCPB8CZmPR8s55nlfPUEvYC5tbPg6NqIE5LuTAz6FkUnYFLosWprCrplwytUfA4tq3sUdO1Gl40Pa+u0LL1cC6ZLbBGfA2sLq33CXZkscEJoDytYETh4S0R07bsm0Olq/77RbrbWTF2AzmickaUufVd/wMB+wGVI4YebkIRIeHM9tuVIwCfYQ2O/RZ/YMkhV4REtHq1u32H3fsgTKtAM2aANUCx0/dPIrPm7By7Sw2VsJDMhXOmYy6xr6+Ls/DfPmQ7IpaqhSMroITd4pTf6Vx8dZKxJfXlEllkFhBBGEXl6IOvh2DkjYz4Ud4W9Vvoe0iyuzhjGHGMJczSn88KkMVL9f5ia4GtubzkKd/sjCAq3EsRTGbdIVbDWcxNTYHuLryvKuMMNrl79fgkJf7fzXDyyqZA+KmaWwZ6rl9VrcdFmjEDO5C7HLLbuOmpaiEPbj69sGYqIQz4OSbVbBwqa+itb0JK4E6fax33JzfKrDnaUEjfyBQAfD3FtaSJNxd+p7pwjFvzUWMZOLN1S/HR4IBxa3qqTUJev5LdxQLOFIvY3ZbCz9PpKCWGTqpDDNdOBXzh3z5AGUqeVTX2z/dAYVj1LJedf0xXUuj5KcxwKP1ocRpwkf/XwEXONRIuTGZvd3Ape0ilth2YxUfVULIIVcHO9idJi8gdFP8tThl/YVGzlfj8AcuWW3tC3k2jDusHo1kSUxtZxGOlURZ+u/NQwKk+iL/L04HG5tjrp+GzeTWxuFSKV+s6IDlFEO6hRiuDuP4agwhTLraWoK2yxdWmjN8Pg9jqvURqBJD9FyUlxm7eVusTrahSvKpe/fyAMNQRchE+Gvyf13ybWvdQtx/EGH0Rh7eB8BAijRq7norRfgWHzQbEKSlm8p8BIsvPVtb3bwNn1xpfD2b3qbWH2M8oUvTpnuL/IHR3Op5Vcz/eXhpUYpY+MDtVLtCHMMidb3TdE92WexlNpCq9pmADhuHPqdUlF9soi7YV3G2jd8eBowUk8ttE/RqY/G+gi5Os5QeETTYpVFSgyJNhbU0jGd5m5Cn56KA+EKlQBvJCj3xttZgqJMCYHU5Sp8lDdtoT0pCL0NZseirx+pDnC6eDSZASt6GMsAt/tFR/pPL2UWHMW/uT3RgRZcPhfv6nuvt22lQlhJ/S9UvB65esJ/OSrU1l+tsjV8MEqw36xX2xhrjbmYGzMgfu33/v+OFiOn/g0pWQlCqNXgD0u6T/rrNE4jioKAXsbEu1gx8iVwY9EjGQyOZcIYwjxlDfM4YJCSmZ8uGMU8zLx5S+F5BqpB5GHIqQv+8wT+wi/8wi/8wi/8wi/8wi/8d+F/pTb68r87dm0AAAAASUVORK5CYII=" 
            class="img-thumbnail" width="500px" height="500px" /></center>
            </div>
            </div>
        );
    }

  }

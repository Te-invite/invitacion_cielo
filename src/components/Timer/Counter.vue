<script>

export default {
    name: 'Counter',
    props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
    data() {
        return {
            displayDays: 0,
            displayHours: 0,
            displayMinutes: 0,
            displaySeconds: 0,
            loaded: false,
            expired: false,
            d: "Días",
            h: "Horas",
            m: "Min",
            s: "Seg",
            title: "Faltan",
            title1: "Llegó el día",
            title2:"¿Listos para festejar?"

        };
    },
    computed: {
        _seconds() {
            return 1000;
        },
        _minutes() {
            return this._seconds * 60;
        },
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        },
        end() {
            return new Date(
                this.year,
                this.month - 1, // Los meses en JavaScript van de 0 a 11
                this.date,
                this.hour,
                this.minute,
                this.second,
                this.millisecond
            );
        }
    },
    mounted() {
        this.showRemaining();
    },
    methods: {
        formatNum(num) {
            return num < 10 ? '0' + num : num;
        },
        showRemaining() {
            const timer = setInterval(() => {
                const now = new Date();
                const distance = this.end.getTime() - now.getTime();

                if (distance < 0) {
                    clearInterval(timer);
                    this.expired = true;
                    this.loaded = true;
                    return;
                }

                const days = Math.floor(distance / this._days);
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);

                this.displayMinutes = this.formatNum(minutes);
                this.displaySeconds = this.formatNum(seconds);
                this.displayHours = this.formatNum(hours);
                this.displayDays = this.formatNum(days);
                this.loaded = true;
            }, 1000);
        }
    }
};
</script>

<template>
    <div v-if="loaded" class="container">
        <section class="title__counter">
            <h3 v-show="!expired" class="counter__txt">{{ title }}</h3>
            <h3 v-show="expired" class="counter__txt">{{ title1 }}</h3>
        </section>

        <section class="counter__container">
            <div class="counter__content dia">
                    <h1>{{ displayDays }} </h1>
                    <span class="counter__label">{{ d }}</span>
                    
                </div>
            <div class="container_hora">
                
                <div class="counter__content hora">
                    <h1>{{ displayHours }} :</h1>
                    <span class="counter__label">{{ h }}</span>
                </div>
                <div class="counter__content minuto">
                    <h1>{{ displayMinutes }} :</h1>
                    <span class="counter__label">{{ m }}</span>
                </div>
                <div class="counter__content segundos">
                    <h1>{{ displaySeconds }}</h1>
                    <span class="counter__label">{{ s }}</span>
                </div>
            </div>
        </section>
        <span class="title__counter1">
            <h3  class="counter__txt2">{{ title2 }}</h3>
        </span>

    </div>
</template>

<style scoped>
.counter__txt{
    font-size: 60px;
    font-family: "Recoleta";
    color:var(--font-primary-color);
    text-align: center;
    font-size: .9rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.4px;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    width: 80%;
    height:190px;
}

.counter__container {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;;
    width:80%;
}
.container_hora{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: auto;
    width: 180px;
    height:auto;
    margin-top:1rem;
}
.counter__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.counter__content > h1{
    font-family:"Recoleta";
    color:var(--font-secondary);
    font-size: var(--text-subtitle-mobile);
    font-style: normal;
    font-weight: 400;
    line-height: 80%;
}
.counter__label{
    font-size:.5rem;
    font-family:"Recoleta";
    color:var(--font-secondary);
}
.dia h1,
.dia span{
    color:var(--font-primary-color);
}
.title__counter1{
    width:160px;
    margin-bottom:1.2rem;
}
.counter__txt2{
    font-size: .8rem;
    font-family: "Recoleta";
    color:var(--font-subtitle);
    text-align: center;
    font-size: .9rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1px;
    word-break:break-all;
}


@media (min-width: 768px) and (max-width: 991px) {
    .container{
        height:300px;
    }
    .container_hora{
        width:250px;
    }
    .counter__container{
        height:200px;
    }
    .counter__txt{
        font-size: 1.5rem;
    }
    .counter__content > h1{
        font-size:3rem;
    }
    .counter__label{
        font-size:1rem;
    }

}

@media (min-width: 1025px) {
    .container{
        height:300px;
    }
    
    .counter__txt{
        font-size: 1.5rem;
    }
    .container_hora{
        width:300px;
    }
    .counter__content > h1{
        font-size:3rem;
    }
    .counter__label{
        font-size:1rem;
    }
   

}
</style>
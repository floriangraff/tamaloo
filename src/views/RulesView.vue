<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="bg-transparent">
    <h1>Die offiziellen Tamloo Regeln</h1>
    <h2>Vorbereitung:</h2>

    Jeder Spieler erhält 4 Karten. Diese werden verdeckt hingelegt, ohne angesehen zu werden.
    Jeder Spieler darf zwei seiner Karten verdeckt ansehen.<br/>
    Die restlichen Karten bilden einen Ziehstapel. Eine Karte wird vom Ziehstapel offen auf den Ablagestapel gelegt. Der nächste Spieler im Uhrzeigersinn darf beginnen.<br/>
    <br/>
    <h2>Spiel</h2>
    Die Spieler sind im Uhrzeigersinn an der Reihe. Jeder Zug besteht aus 2 Schritten:<br/>
    Der Spieler zieht eine Karte vom Ziehstapel oder vom Ablagestapel. Diese darf er verdeckt ansehen.<br/>
    Nun gibt es zwei Optionen:<br/>
    Die Karte wird direkt wieder abgelegt. In diesem Fall darf ggf. die Spezialfunktion der Karte genutzt werden.<br/>
    Die Karte wird an die Stelle einer eigenen Karte gelegt. Und die eigene Karte wird dafür abgelegt.<br/>
    Karten abwerfen<br/>
    Wenn eine Karte auf den Ablagestapel gelegt wurde darf von einem beliebigen Spieler (nicht mehreren!) eine Karte mit gleichen Symbol (z.B. 9 auf 9) direkt abgelegt werden. Falls eine unpassende Karte aufgedeckt/abgeworfen wurde muss der betreffende Spieler die Karte zurücklegen und eine Strafkarte ziehen.<br/>
    Spezialfunktionen<br/>

    <table class="table">
      <tr>
        <td>7 / 8</td>
        <td>eine eigene Karte ansehen</td>
      </tr>
      <tr>
        <td>9 / 10</td>
        <td>eine fremde Karte ansehen</td>
      </tr>
      <tr>
        <td>Bube/Dame</td>
        <td>zwei beliebige Spielerkarten auf dem Spielfeld vertauschen</td>
      </tr>
      <tr>
        <td>König</td>
        <td>eine beliebige Spielerkarte ansehen und diese ggf mit einer anderen<br/>
          beliebigen Karte vertauschen.</td>
      </tr>
    </table>
    <h2> Spieler anzeigen</h2>
    Wenn ein Spieler nicht mitbekommt, dass er eine Karte hätte abwerfen können, so darf diese von einem anderen Spieler aufgedeckt werden und der Betreffende muss eine Strafkarte ziehen. (Es muss jedoch zuvor genug Zeit zum Abwerfen gelassen werden.)
    Sollte die “Anzeige” jedoch unrechtmäßig (falsch) sein, muss der Anzeigende zwei Strafkarten ziehen.
    <h2>Spielende</h2>
    Das Spiel kann auf zwei verschiedene Weisen enden:<br/><br/>
    <b>Leere Hand</b><br/>
    Wenn ein Spieler keine Karten mehr hat, gewinnt dieser und das Spiel ist sofort vorbei.<br/>
    Der Gewinner bekommt +10 Punkte.<br/>
    Alle anderen erhalten die Summe ihrer Kartenwerte als Minuspunkte.<br/>
    Sollte es ein Unentschieden geben, können auch mehrere Spieler gewinnen und somit +10 Punkte bekommen.<br/><br/>
    <b>Tamaloo</b><br/>
    Statt seines Zuges kann ein Spieler “Tamaloo” sagen. Daraufhin ist das Blatt des betreffenden Spielers geschützt vor Spezialkarten und alle weiteren Spieler sind noch ein letztes mal an der Reihe. Dann endet das Spiel. Wenn der Spieler, der “Tamaloo” gesagt hat, die niedrigste Kartensumme auf der Hand hat gewinnt er und erhält somit +10 Punkte.
    Sollte ein anderer Spieler jedoch eine geringere oder gleiche Kartensumme haben, gewinnt dieser und der “Tamaloo”-rufende bekommt zusätzlich zu seinen Karten-Minuspunkten -10 Strafpunkte.
    Alle anderen erhalten die Summe ihrer Kartenwerte als Minuspunkte.
    <br/>
    <h2>Kartenwertung</h2>
    <table class="table">
      <tr>
        <td>roter König</td>
        <td>0</td>
      </tr>
      <tr>
        <td>As</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Zahlen</td>
        <td>Entsprechend Zahl</td>
      </tr>
      <tr>
        <td>Bube</td>
        <td>11</td>
      </tr>
      <tr>
        <td>Dame</td>
        <td>12</td>
      </tr>
      <tr>
        <td>Schwarzer König</td>
        <td>13</td>
      </tr>
    </table>
    <h2>Punkte für Gewinn/Tamaloo</h2>
    <table class="table">
      <tr>
      <td>Gewinn normal (ohne Tamaloo)</td>
      <td>10 Punkte</td>
      </tr>
      <tr>
      <td>Tamaloo richtig</td>
      <td>10 Punkte</td>
      </tr>
      <tr>
      <td>Tamaloo falsch</td>
      <td>-10 - Handpunkte</td>
      </tr>
    </table>

    <h2>Variationen</h2>
    Das Spiel kann mit mehr oder weniger Startkarten gespielt werden um die Schwierigkeit zu variieren
    Es gibt keine Pluspunkte für den Gewinner (mehr Fokus auf gute Hand)
    Es gibt nur Pluspunkte bei einem erfolgreichen “Tamaloo”-Ende
    Wenn eine Karte vom Ablagestapel gezogen wird, bleibt diese aufgedeckt
    <br/>
    <br/>
  </main>
</template>

<style scoped>
</style>

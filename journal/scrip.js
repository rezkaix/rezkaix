document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("journalForm");
  const tradeList = document.getElementById("tradeList");

  function loadTrades() {
    const trades = JSON.parse(localStorage.getItem("rezkaix_trades") || "[]");
    tradeList.innerHTML = "";

    if (trades.length === 0) {
      tradeList.innerHTML = "<li>No trades saved yet.</li>";
      return;
    }

    trades.forEach((trade, i) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${trade.date}</strong> | ${trade.symbol} | ${trade.direction} | ${trade.result}<br />
        <em>${trade.entryTime} → ${trade.exitTime}</em> | Tags: ${trade.tags}
      `;
      tradeList.appendChild(li);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const trade = {
      date: document.getElementById("date").value,
      symbol: document.getElementById("symbol").value,
      session: document.getElementById("session").value,
      entryTime: document.getElementById("entryTime").value,
      exitTime: document.getElementById("exitTime").value,
      direction: document.getElementById("direction").value,
      entryPrice: document.getElementById("entryPrice").value,
      exitPrice: document.getElementById("exitPrice").value,
      stopLoss: document.getElementById("stopLoss").value,
      takeProfit: document.getElementById("takeProfit").value,
      result: document.getElementById("result").value,
      tags: document.getElementById("tags").value,
      notes: document.getElementById("notes").value
    };

    const trades = JSON.parse(localStorage.getItem("rezkaix_trades") || "[]");
    trades.push(trade);
    localStorage.setItem("rezkaix_trades", JSON.stringify(trades));

    alert("✅ Trade Saved!");
    form.reset();
    loadTrades();
  });

  loadTrades();
});

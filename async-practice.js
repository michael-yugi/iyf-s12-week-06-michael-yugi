// ============================================
// LESSON 11 — CALLBACKS, PROMISES AND ASYNC/AWAIT
// ============================================

const nameFor = (id) => ({ 1: "Amina", 2: "Brian" }[id] || "Unknown");

// ============================================
// PART A — CALLBACKS (GIVEN)
// ============================================

function getUserCb(userId, cb) {
  setTimeout(() => {
    if (!userId) return cb(new Error("Missing userId"));
    cb(null, { id: userId, name: nameFor(userId) });
  }, 400);
}

function getOrdersCb(user, cb) {
  setTimeout(() => {
    cb(null, [
      { id: 101, amount: 20 },
      { id: 102, amount: 35 },
    ]);
  }, 400);
}

function getOrderTotalCb(orders, cb) {
  setTimeout(() => {
    const total = orders.reduce((sum, o) => sum + o.amount, 0);
    cb(null, total);
  }, 400);
}

// Callback version
getUserCb(1, (err, user) => {
  if (err) return console.error("A error:", err.message);

  getOrdersCb(user, (err, orders) => {
    if (err) return console.error("A error:", err.message);

    getOrderTotalCb(orders, (err, total) => {
      if (err) return console.error("A error:", err.message);

      console.log(`A: ${user.name} spent ${total}`);
    });
  });
});

// ============================================
// PART B — PROMISES
// ============================================

// B1: Convert functions into Promises

function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userId) {
        return reject(new Error("Missing userId"));
      }

      resolve({ id: userId, name: nameFor(userId) });
    }, 400);
  });
}

function getOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, amount: 20 },
        { id: 102, amount: 35 },
      ]);
    }, 400);
  });
}

function getOrderTotal(orders) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = orders.reduce((sum, o) => sum + o.amount, 0);
      resolve(total);
    }, 400);
  });
}

// B2: Chain Promises

getUser(1)
  .then((user) => {
    return getOrders(user).then((orders) => {
      return { user, orders };
    });
  })
  .then(({ user, orders }) => {
    return getOrderTotal(orders).then((total) => {
      return { user, total };
    });
  })
  .then(({ user, total }) => {
    console.log(`B: ${user.name} spent ${total}`);
  })
  .catch((err) => {
    console.error("B error:", err.message);
  });

// ============================================
// PART C — ASYNC/AWAIT
// ============================================

// C1: Create async checkout function

async function checkout(userId) {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user);
    const total = await getOrderTotal(orders);

    console.log(`C: ${user.name} spent ${total}`);
  } catch (err) {
    console.error("C error:", err.message);
  }
}

// C2: Call checkout

checkout(1);

// ============================================
// BONUS — PROMISE.ALL
// ============================================

Promise.all([
  getUser(1),
  getUser(2)
])
  .then((users) => {
    console.log("BONUS: Users fetched in parallel:");

    users.forEach((user) => {
      console.log(user.name);
    });
  })
  .catch((err) => {
    console.error("BONUS error:", err.message);
  });
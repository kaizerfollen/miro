const channel = new BroadcastChannel('cards_channel');

export const broadcastChange = (action, payload) => {
  const message = JSON.parse(JSON.stringify({ action, payload }));
  channel.postMessage(message);
};

export const onBroadcastMessage = (callback) => {
  channel.onmessage = (event) => {
    const { action, payload } = event.data;
    callback(action, payload);
  };
};

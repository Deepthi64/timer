
const args = process.argv.slice(2);

const getalarm = (alarm) => {
  if (typeof alarm !== 'number') {
    return;
  }
  if (alarm < 0) {
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, alarm * 1000);
};

for (let i = 0; i < args.length; i++) {
  const time = Number(args[i]);
  getalarm(time);
}
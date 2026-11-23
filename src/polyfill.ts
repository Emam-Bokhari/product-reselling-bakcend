import buffer from 'buffer';

// Polyfill SlowBuffer for Node.js compatibility (buffer-equal-constant-time / jsonwebtoken)
if (!(buffer as any).SlowBuffer) {
  (buffer as any).SlowBuffer = buffer.Buffer;
}

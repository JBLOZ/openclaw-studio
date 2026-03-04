f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
const net = require("node:net");
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
const normalizeHost = (host) => {
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  let raw = String(host ?? "").trim().toLowerCase();
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  if (!raw) return "";
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  if (raw.startsWith("[")) {
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
    const end = raw.indexOf("]");
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
    if (end !== -1) {
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
      return raw.slice(1, end).trim();
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
    }
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  }
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  const colonCount = (raw.match(/:/g) || []).length;
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  if (colonCount === 1) {
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
    const idx = raw.lastIndexOf(":");
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
    const maybePort = raw.slice(idx + 1);
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
    if (/^\d+$/.test(maybePort)) {
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
      raw = raw.slice(0, idx);
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
    }
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  }
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  return raw;
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
};
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
const resolveHosts = (env = process.env) => {
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  const host = String(env.HOST ?? "").trim();
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  if (host) return [host];
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  return ["127.0.0.1", "::1"];
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
};
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
const resolveHost = (env = process.env) => {
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  const hosts = resolveHosts(env);
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  return hosts[0] ?? "127.0.0.1";
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
};
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
const isIpv4Loopback = (value) => value.startsWith("127.");
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
const isIpv6Loopback = (value) => {
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  if (value === "::1" || value === "0:0:0:0:0:0:0:1") return true;
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  if (!value.startsWith("::ffff:")) return false;
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  const mapped = value.slice("::ffff:".length);
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  return net.isIP(mapped) === 4 && isIpv4Loopback(mapped);
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
};
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
const isPublicHost = (host) => {
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  const normalized = normalizeHost(host);
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  if (!normalized) return false;
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  if (normalized === "localhost") return false;
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  if (normalized === "0.0.0.0" || normalized === "::") {
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
    return true;
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  }
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  const ipVersion = net.isIP(normalized);
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  if (ipVersion === 4) {
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
    return !isIpv4Loopback(normalized);
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  }
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  if (ipVersion === 6) {
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
    return !isIpv6Loopback(normalized);
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  }
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  return true;
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
};
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
const assertPublicHostAllowed = ({ host, studioAccessToken }) => {
  const allowInsecurePublicHost = String(process.env.STUDIO_ALLOW_INSECURE_PUBLIC_HOST ?? "").trim();
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  if (!isPublicHost(host)) return;
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  const token = String(studioAccessToken ?? "").trim();
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  if (token) return;
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  const normalized = normalizeHost(host) || String(host ?? "").trim() || "(unknown)";
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  throw new Error(
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
    `Refusing to bind Studio to public host "${normalized}" without STUDIO_ACCESS_TOKEN. ` +
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
      "Set STUDIO_ACCESS_TOKEN or bind HOST to 127.0.0.1/::1/localhost."
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  );
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
};
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;

f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
module.exports = {
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  resolveHosts,
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  resolveHost,
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  isPublicHost,
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
  assertPublicHostAllowed,
f (allowInsecurePublicHost === "1" || allowInsecurePublicHost.toLowerCase() === "true") return;
};

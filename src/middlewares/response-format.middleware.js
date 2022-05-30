export default function responseFormat(_, res) {
  const { httpStatus, data = {}, message } = res.locals;

  res.status(httpStatus).json({ data, message });
}

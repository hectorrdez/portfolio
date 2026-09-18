export default class StringUtils {
  public static JoinClassName(...args: Array<string | undefined>) {
    return args.filter(Boolean).join(" ");
  }
}

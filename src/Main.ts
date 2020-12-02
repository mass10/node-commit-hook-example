namespace Utils {

	/**
	 * タイムスタンプ文字列を返します。
	 */
	export function getCurrentTimestamp(): string {

		// ローカル時刻
		const now = new Date();

		const year = `${now.getFullYear()}`;
		const month = `0${1 + now.getMonth()}`.slice(-2);
		const day = `0${now.getDate()}`.slice(-2);
		const hour = `0${now.getHours()}`.slice(-2);
		const minutes = `0${+ now.getMinutes()}`.slice(-2);
		const seconds = `0${now.getSeconds()}`.slice(-2);
		const milliseconds = `00${now.getMilliseconds()}`.slice(-3);

		return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}.${milliseconds}`;
	}
}

namespace Logger {

	export function trace(...args: any[]): void {
		const timestamp = Utils.getCurrentTimestamp();
		const level = "TRACE";
		const parameters = 0 < args.length ? [`${timestamp} [${level}] ${args[0]}`] : [`${timestamp} [${level}] `];
		parameters.push(...args.slice(1));
		console.log(...parameters);
	}
}

namespace Main {

	export function main(): void {
		Logger.trace("%s %s", 100, "AAA");
	}
}

Main.main();

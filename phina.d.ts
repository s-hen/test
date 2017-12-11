// Type definitions for phina.js 0.2.0
// Project: http://phinajs.com/
// Definitions by: s_hen

type DOMElement = Element;

//=============================================================
// #region global
// #region Object
/**
 * @class global.Object
 * Objectの拡張
 */
interface Object {
    /**
     * @method property
     * 変数を追加
     * @param   {String} key name
     * @param   Object param
     */
    // property(name: string, val: {}): void;

    /**
     * @method method
     * 関数を追加
     * @param   {String} key name
     * @param   {Function} function
     */
    $method(name: string, fn: Function): void;

    /**
     * @method setter
     * セッターを定義する
     */
    setter(name: string, fn: Function): void;

    /**
     * @method getter
     * ゲッターを定義する
     */
    getter(name: string, fn: Function): void;

    /**
     * @method accessor
     * アクセッサ(セッター/ゲッター)を定義する
     */
    accessor(name: string, param: { set?: Function, get?: Function }): void;


    /**
     * @method forIn
     * オブジェクト用ループ処理
     */
    forIn(fn: Function, self?: {}): this;

    /**
     * @method  $get
     * パス指定で値を取得
     */
    $get(key: string): any;

    /**
     * @method  $set
     * パス指定で値を設定
     */
    $set(key: string, value: any): void;

    /**
     * @method  $has
     * そのプロパティを持っているかを判定する
     */
    $has(key: string): boolean;

    /**
     * @method  $extend
     * 他のライブラリと競合しちゃうので extend -> $extend としました
     */
    $extend(): this;

    /**
     * @method  $safe
     * 安全拡張
     * 上書きしない
     */
    $safe(source: {}): this;

    /**
     * @method  $strict
     * 厳格拡張
     * すでにあった場合は警告
     */
    $strict(source: {}): this;

    /**
     * @method  $pick
     * ピック
     */
    $pick(): {};

    /**
     * @method  $omit
     * オミット
     */
    $omit(): {};

    /**
     * @method  $toArray
     * 配列化
     */
    $toArray(): any[];

    $watch(key: string, callback: Function): void;
}
// #endregion Object
// #region Number
/**
 * @class global.Number
 * # 拡張した Number クラス
 * 数値を扱う Number クラスを拡張しています。
 */
interface Number {
    /**
     * @method round
     * 指定した小数の位を四捨五入した値を返します。
     *
     * 負の値を指定すると整数部の位を四捨五入できます。
     *
     * ### Example
     *     (13.87).round(); // => 14
     *     (-1.87).round(); // => -2
     *     (-1.27).round(); // => -1
     *     
     *     (2.345).round(); // => 2
     *     (2.345).round(1); // => 2.3
     *     (2.345).round(2); // => 2.35
     *
     *     (12345.67).round(-3); // => 12000
     *
     * @param {Number} [figure=0] 四捨五入する位
     * @return {Number} 小数第 figure 位で四捨五入した値
     */
    round(figure?: number): number;

    /**
     * @method ceil
     * 指定した小数の位を切り上げた値を返します。
     *
     * 負の値を指定すると整数部の位を切り上げられます。
     *
     * ### Example
     *     (-1.27).ceil(); // => -1
     *     (-1.87).ceil(); // => -1
     *     
     *     (2.345).ceil(); // => 3
     *     (2.345).ceil(1); // => 2.4
     *     (2.345).ceil(2); // => 2.35
     *
     *     (12345.67).ceil(-3); // => 13000
     *
     * @param {Number} [figure=0] 切り上げる位
     * @return {Number} 小数第 figure 位で切り上げた値
     */
    ceil(figure?: number): number;
    /**
     * @method floor
     * 指定した小数の位を切り下げた値を返します。
     *
     * 負の値を指定すると整数部の位を切り下げられます。
     *
     * ### Example
     *     (-1.27).floor(); // => -2
     *     (-1.87).floor(); // => -2
     *     
     *     (2.345).floor(); // => 2
     *     (2.345).floor(1); // => 2.3
     *     (2.345).floor(2); // => 2.34
     *
     *     (12345.67).floor(-3); // => 12000
     *
     * @param {Number} [figure=0] 切り下げる位
     * @return {Number} 小数第 figure 位で切り下げた値
     */
    floor(figure?: number): number;

    /**
     * @method toInt
     * 数値を整数に変換します。
     *
     * ### Example
     *     (42.195).toInt(); // => 42
     *
     * @return {Number} 整数値
     */
    toInt(): number;

    /**
     * @method toHex
     * 数値を16進数表記にした文字列を返します。
     *
     * ### Example
     *     (26).toHex(); // => "1a"
     *     (-26).toHex(); // => "-1a"
     *     (26.25).toHex(); // => "1a.4"
     *
     * @return {String} 16進数表記の文字列
     */
    toHex(): string;

    /**
     * @method toBin
     * 数値を2進数表記にした文字列を返します。
     *
     * ### Example
     *     (6).toBin(); // => "110"
     *     (-6).toBin(); // => "-110"
     *     (0xA3).toBin(); // => "10100011"
     *     (6.25).toHex(); // => "110.01"
     *
     * @return {String} 2進数表記の文字列
     */
    toBin(): string;

    /**
     * @method toUnsigned
     * 数値を unsigned int 型に変換します。
     *
     * 数値を符号無し整数として評価した値を返します。  
     * Javascriptのビット演算では数値を符号付きの32bit整数として扱うため、RGBA を
     * 整数値で表現して演算する場合、期待通りの結果が得られない場合があります。
     * そこで本関数で unsigned int 型に変換することで期待通りの値を得ることができます。
     *
     * ### Example
     *     rgba = 0xfeffffff & 0xff000000; // => -33554432
     *     rgba.toHex(); // => "-2000000"
     *     rgba.toUnsigned().toHex(); // => "fe000000"
     *
     * @return {Number} unsigned int 型に変換した値
     */
    toUnsigned(): number;

    /**
     * @method padding
     * 指定した桁になるように文字を埋めます。
     *
     * ### Example
     *     (123).padding(5); // => "00123"
     *     (123).padding(5, "_"); // => "__123"
     *     (-12).padding(5); // => "-0012"
     *
     * @param {Number} n 桁数
     * @param {String} [ch="0"] 埋める文字
     * @return {String} 桁数を揃えた文字列
     */
    padding(n: number, ch?: string): string;

    /**
     * @method times
     * 0 から自分自身の数-1まで、カウンタをインクリメントしながら関数を繰り返し実行します。
     *
     * ### Example
     *     arr = [];
     *     (5).times(function(i){
     *       arr.push(i);
     *     }); // => [0, 1, 2, 3, 4]
     *
     * @param {Function} fn コールバック関数
     * @param Object [self=this] 関数内で this として参照される値。デフォルトは自分自身。
     */
    times(fn: Function, self?: {}): number;

    /**
     * @method upto
     * 自分自身の数から指定した数まで、カウンタをインクリメントしながら関数を繰り返し実行します。
     *
     * 指定した数が自分自身の数より小さい場合は関数は実行されません。
     *
     * ### Example
     *     arr = [];
     *     (6).upto(8, function(i){
     *       arr.push(i);
     *     });
     *     arr; // => [6, 7, 8]
     *
     *     (3).upto(0, function(i){
     *       arr.push(i);
     *     });
     *     arr; // => [6, 7, 8]
     *
     * @param {Function} fn コールバック関数。引数にカウンタが渡される。
     * @param Object [self=this] 関数内で this として参照される値。デフォルトは自分自身。
     */
    upto(t: number, fn: Function, self?: {}): number;

    /**
     * @method downto
     * 自分自身の数から指定した数まで、カウンタをデクリメントしながら関数を繰り返し実行します。
     *
     * 指定した数が自分自身の数より大きい場合は関数は実行されません。
     *
     * ### Example
     *     arr = [];
     *     (7).downto(4, function(i){
     *       arr.push(i);
     *     }); // => [7, 6, 5, 4]
     *
     * @param {Function} fn コールバック関数。引数にカウンタが渡される。
     * @param Object [self=this] 関数内で this として参照される値。デフォルトは自分自身。
     */
    downto(t: number, fn: Function, self?: {}): number;

    /**
     * @method step
     * 自分自身の値から指定した数まで、カウンタを増分させながら関数を繰り返し実行します。
     *
     * 上限値や増分値は float 型を指定することができます。
     *
     * ### Example
     *     var arr = [];
     *     (2.4).step(5.3, 0.8, function(n) {
     *       arr.push(n);
     *      }); // => [2.4, 3.2, 4.0, 4.8]
     *
     * @param {Number} limit カウンタの上限値
     * @param {Number} step カウンタを増分する量
     * @param {Function} fn コールバック関数。引数にカウンタが渡される。
     * @param Object [self=this] 関数内で this として参照される値。デフォルトは自分自身。
     */
    step(limit: number, step: number, fn: Function, self?: {}): number;

    /**
     * @method map
     * 0から自分自身の値-1までカウンタをインクリメントさせながらコールバック関数を繰り返し実行し、
     * その返り値を要素とする配列を生成します。
     *
     * ### Example
     *     (5).map(function(i) {
     *       return i*i;
     *     }); // => [0, 1, 4, 9, 16]
     *
     * @param {Function} fn コールバック関数。引数にカウンタが渡される。
     * @param Object [self=this] 関数内で this として参照される値。デフォルトは自分自身。
     * @return {Array} 生成した配列
     */
    map(fn: Function, self?: {}): any[];

    /**
     * @method abs
     * 絶対値を返します。
     *
     * ### Example
     *     (-5).abs(); // => 5
     *     (+5).abs(); // => 5
     *
     * @return {Number} 絶対値
     */
    abs(): number;

    /**
     * @method acos
     * アークコサイン（ラジアン単位）を返します。
     *
     * ### Example
     *     (0).asin(); // => 0
     *     (1).asin(); // => 1.5707963267948966
     *
     * @return {Number} アークコサイン
     */
    acos(): number;

    /**
     * @method asin
     * アークサイン（ラジアン単位）を返します。
     *
     * ### Example
     *     (1).acos(); // => 0
     *     (-1).acos(); // => 3.141592653589793
     *
     * @return {Number} アークサイン
     */
    asin(): number;

    /**
     * @method atan
     * アークタンジェント（ラジアン単位）を返します。
     *
     * ### Example
     *     (0).atan(); // => 0
     *     (1).atan(); // => 0.7853981633974483
     *
     * @return {Number} アークタンジェント
     */
    atan(): number;

    /**
     * @method cos
     * コサイン（ラジアン単位）を返します。
     *
     * ### Example
     *     (Math.PI/3).cos(); // => 0.5
     *
     * @return {Number} コサイン
     */
    cos(): number;

    /**
     * @method exp
     * e<sup>this</sup> を返します。ここで e は自然対数の底であるネイピア数（オイラー数）です。
     *
     * ### Example
     *     (2).exp(); // => e<sup>2</sup>
     *     (0).exp(); // => 1
     *
     * @return {Number} e<sup>x</sup>
     */
    exp(): number;

    /**
     * @method log
     * 自然対数を返します。
     *
     * ### Example
     *     (Math.E * Math.E * Math.E).log(); // => 3
     *     (1).log(); // => 0
     *     (0).log(); // => -Infinity
     *
     * @return {Number} 自然対数
     */
    log(): number;

    /**
     * @method max
     * 自分自身と引数の値を比べ、大きい方の値を返します。
     *
     * ### Example
     *     (15).max(10); // => 15
     *     (15).max(90); // => 90
     *
     * @param {Number} value 比較する値
     * @return {Number} 最大値
     */
    max(value: number): number;

    /**
     * @method min
     * 自分自身と引数の値を比べ、小さい方の値を返します。
     *
     * ### Example
     *     (15).min(10); // => 10
     *     (15).min(90); // => 15
     *
     * @param {Number} value 比較する値
     * @return {Number} 最小値
     */
    min(value: number): number;

    /**
     * @method clamp
     * 指定した範囲に収めた値を返します。
     *
     * ### Example
     *     (200).clamp(0, 640); // => 200
     *     (-15).clamp(0, 640); // => 0
     *     (999).clamp(0, 640); // => 640
     *
     * @param {Number} min 範囲の下限
     * @param {Number} max 範囲の上限
     * @return {Number} 範囲内に収めた値
     */
    clamp(min: number, max: number): number;

    /**
     * @method pow
     * 自分自身を exponent 乗した値、つまり this<sup>exponent</sup> の値を返します。
     *
     * ### Example
     *     (3).pow(2); // => 9
     *
     * @param {Number} exponent 累乗する指数
     * @return {Number} 累乗した結果の値
     */
    pow(exponent: number): number;

    /**
     * @method sin
     * サイン（ラジアン単位）を返します。
     *
     * ### Example
     *     (Math.PI/4).sin(); // => 0.7071067811865476
     *
     * @return {Number} サイン
     */
    sin(): number;

    /**
     * @method sqrt
     * 平方根を返します。
     *
     * ### Example
     *     (49).sqrt(); // => 7
     *
     * @return {Number} 平方根
     */
    sqrt(): number;

    /**
     * @method tan
     * タンジェント（ラジアン単位）を返します。
     *
     * ### Example
     *     (Math.PI/4).tan(); // => 1.0
     *
     * @return {Number} タンジェント
     */
    tan(): number;

    /**
     * @method toDegree
     * ラジアンを度に変換します。
     *
     * ### Example
     *     Math.radToDeg(Math.PI/4); // => 45
     *
     * @return {Number} 度
     */
    toDegree(): number;

    /**
     * @method toRadian
     * 度をラジアンに変換します。
     *
     * ### Example
     *     (180).toRadian(); // => 3.141592653589793
     *
     * @return {Number} ラジアン
     */
    toRadian(): number;

}
// #endregion Number
//=============================================================
// #region String
/**
 * @class global.String
 * # 拡張した String クラス
 * 文字列を扱う String クラスを拡張しています。
 */
interface String {
    /**
     * @method format
     * フォーマットに引数を適用した文字列を返します。
     *
     * 引数がオブジェクトの場合、"{プロパティ名}" がオブジェクトのプロパティの値に置き換わります。
     * 指定したプロパティがオブジェクトにない場合は空文字列になります。
     *
     * 第1引数がオブジェクトでなかった場合、"{整数}" が各引数に置き換わります。
     * 指定した値の引数がなかった場合は空文字列になります。
     *
     * ### Example
     *     obj = {r: 128, g: 0, b: 255};
     *     "color: rgb({r}, {g}, {b});".format(obj); // => "color: rgb(128, 0, 255);"
     *
     *     "{0} + {1} = {2}".format(5, 8, (5+8)); // => "5 + 8 = 13"
     *
     * @param Object obj パラメータとなるオブジェクト
     * @return {String} 生成した文字列
     */
    format(arg: {}): string;

    /**
     * @method trim
     * 文字列先頭と末尾の空白文字を全て取り除いた文字列を返します。
     *
     * ###Reference
     * - [string Functions for Javascript – trim, to camel case, to dashed, and to underscore](http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/)
     *
     * ### Example
     *     "  Hello, world!  ".trim(); // => "Hello, world!"
     *
     * @return {String} トリムした結果の文字列
     */
    trim(): string;

    /**
     * @method capitalize
     * キャピタライズした文字列、すなわち、すべての単語の先頭を大文字にした文字列を返します。
     *
     * 単語の先頭以外は小文字化されます。
     *
     * ###Reference
     * - [キャピタライズ(単語の先頭の大文字化)を行う - oct inaodu](http://d.hatena.ne.jp/brazil/20051212/1134369083)  
     * - [デザインとプログラムの狭間で: javascriptでキャピタライズ（一文字目を大文字にする）](http://design-program.blogspot.com/2011/02/javascript.html)
     *
     * ### Example
     *     "i aM a pen.".capitalize(); // => "I Am A Pen."
     *
     * @return {String} キャピタライズした文字列
     */
    capitalize(): string;

    /**
     * @method capitalizeFirstLetter
     * 先頭の文字を大文字にして、それ以外を小文字にした文字列を返します。
     *
     * ### Example
     *     "i aM a pen.".capitalizeFirstLetter(); // "I am a pen."
     *
     * @return {String} 先頭の文字を大文字にして、それ以外を小文字にした文字列
     */
    capitalizeFirstLetter(): string;

    /**
     * @method toDash
     * 文字列内の大文字を「"-" + 小文字」に変換します。
     *
     * css2properties（element.style）の各プロパティ名を CSS のプロパティ名に変換する場合に便利です。
     *
     * ### Example
     *     "borderTopColor".toDash(); // => "border-top-color"
     *
     *  @return {String} 変換後の文字列
     */
    toDash(): string;

    /**
     * @method toHash
     * ハッシュ値を生成して返します。
     *
     * ### Example
     *     "phina.js".toHash(); // => 2676327394
     *
     * @return {Number} CRC32ハッシュ値
     */
    toHash(): number;

    /**
     * @method padding
     * 左に文字を埋めて指定した桁にします。this の文字列は右寄せされます。
     *
     * ### Example
     *     "1234".padding(10);      // => "      1234"
     *     "1234".padding(10, '0'); // => "0000001234"
     *
     * @param {Number} figure 桁数
     * @param {String} [ch=" "] 埋める文字
     * @return {String} 指定した桁の文字列
     */
    padding(n: number, ch?: string): string;

    /**
     * @method paddingLeft
     * 左に文字を埋めて指定した桁にします。this の文字列を右寄せされます。
     *
     * {@link #padding} と同じです。
     * @inheritdoc #padding
     */
    paddingLeft(n: number, ch?: string): string;

    /**
     * @method paddingRight
     * 右に文字を埋めて指定した桁にします。this の文字列は左寄せされます。
     *
     * ### Example
     *     "1234".paddingRight(10);      // => "1234      "
     *     "1234".paddingRight(10, '0'); // => "1234000000"
     *
     * @param {Number} figure 桁数
     * @param {String} [ch=" "] 埋める文字
     * @return {String} 指定した桁の文字列
     */
    paddingRight(n: number, ch?: string): string;

    /**
     * @method quotemeta
     * 正規表現のメタ文字をクォートします。
     *
     * ### Example
     *     "Hello world. (can you hear me?)".quotemeta(); // => "Hello\\ world\\.\\ \\(can\\ you\\ hear\\ me\\?\\)"
     *
     *  @return {String} クォートされた文字列
     */
    quotemeta(): string;

    /**
     * @method repeat
     * 自分自身を指定した回数だけ繰り返した文字列を返します。
     *
     * ### Example
     *     "Abc".repeat(4); // => "AbcAbcAbcAbc"
     *
     * @param {Number} n 繰り返し回数
     * @return {String} 文字列
     */
    repeat(n: number): string;

    /**
     * @method count
     * 指定した文字列が何個入っているかをカウントして返します。
     *
     * 大文字・小文字は区別されます。
     *
     * ### Example
     *     "This is a string. Isn't it?".count("is"); // => 2
     *
     * @param {String} str 調べる文字列
     * @return {Number} this に str が入っている個数
     */
    count(str: string): number;

    /**
     * @method include
     * 指定した文字列が含まれているかどうかを返します。
     *
     * 大文字・小文字は区別されます。
     *
     * ### Example
     *     "This is a string.".include("is"); // => true
     *     "This is a string.".include("was"); // => false
     *
     * @param {String} str 調べる文字列
     * @return {Boolean} 含まれているかどうか
     */
    include(str: string): boolean;

    /**
     * @method each
     * 各文字を順番に渡しながら関数を繰り返し実行します。
     *
     * ### Example
     *     str = 'abc';
     *     str.each(function(ch) {
     *       console.log(ch);
     *     });
     *     // => 'a'
     *     //    'b'
     *     //    'c'
     *
     * @param {Function} callback 各要素に対して実行するコールバック関数
     * @param Object [self=this] callback 内で this として参照される値
     */
    each(callback: Function, self?: {}): string;

    /**
     * @method toArray
     * 1文字ずつ分解した配列を返します。
     *
     * ### Example
     *     "12345".toArray(); // => ["1", "2", "3", "4", "5"]
     *     "あいうえお".toArray(); // => "あ", "い", "う", "え", "お"]
     *
     * @return {String[]} 配列
     */
    toArray(): string[];

    /**
     * @method toObject
     * キーと値の組み合わせが連結された文字列からオブジェクトを生成します。
     *
     * 値は Number、Boolean、String のいずれかの型として評価されます。
     *
     * ### Example
     *     obj1 = "num=128.5&flag1=true&flag2=false&str=hoge";
     *     obj1.toObject(); // => {num: 128.5, flag1: true, flag2: false, str: "hoge" }
     *     
     *     obj2 = "num:-64.5|flag1:false|flag2:true|str:foo";
     *     obj2.toObject('|', ':'); // => {num: -64.5, flag1: false, flag2: true, str: "foo" }
     *
     * @param {String} [sep="&"] セパレータ文字
     * @param {String} [eq=""] キーと値の組み合わせを表す文字
     * @return Object オブジェクト
     */
    toObject(sep?: string, eq?: string): {};

    /**
     * @method toCRC32
     * 文字列の CRC32 を計算します。
     *
     * ### Example
     *     "phina.js".toCRC32(); // => 2676327394
     *
     * @return {Number} CRC32 ハッシュ値
     */
    toCRC32(): number;
}
// #endregion String
//=============================================================
// #region Array<T>
/**
 * @class global.Array
 * # 拡張した Array クラス
 * Array クラスを拡張しています。
 */
interface Array<T> {
    /**
     * @property Object first
     * 最初の要素
     *
     * ### Example
     *     arr = [6, 5, 2, 3, 1, 4];
     *     arr.first; // => 6
     */
    first: T;

    /**
     * @property Object last
     * 最後の要素
     *
     * ### Example
     *     arr = [6, 5, 2, 3, 1, 4];
     *     arr.last; // => 4
     */
    last: T;

    /**
     * @method equals
     * 渡された配列と等しいかどうかをチェックします。
     *
     * 要素同士を === で比較します。要素に配列が含まれている場合は {@link #deepEquals} を使用してください。
     *
     * ### Example
     *     arr1 = [6, 5, 2, 3, 1, 4];
     *     arr1.equals([6, 5, 2, 3, 1, 4]);       // => true
     *     arr2 = [6, 5, 2, [3, 1], 4];
     *     arr2.equals([6, 5, 2, [3, 1], 4]);     // => false
     *     arr2.deepEquals([6, 5, 2, [3, 1], 4]); // => true
     *
     * @param {Array} arr 比較する対象の配列
     * @return {Boolean} チェックの結果
     */
    equals(arr: any[]): boolean;

    /**
     * @method deepEquals
     * ネストされている配列を含め、渡された配列と等しいかどうかをチェックします。
     *
     * ※equalsDeep にするか検討. (Java では deepEquals なのでとりあえず合わせとく)
     *
     * ### Example
     *     arr = [6, 5, 2, [3, 1], 4];
     *     arr.equals([6, 5, 2, [3, 1], 4]);     // => false
     *     arr.deepEquals([6, 5, 2, [3, 1], 4]); // => true
     *
     * @param {Array} arr 比較する対象の配列
     * @return {Boolean} チェックの結果
     */
    deepEquals(arr: any[]): boolean;

    /**
     * @method contains
     * 指定した要素が配列に含まれているかをチェックします。
     *
     * 比較には厳密な同値（三重イコール演算子 === で使われるのと同じ方法）を用います。
     *
     * ### Example
     *     arr = [6, 5, 2, 3, 1, 4];
     *     arr.contains(3);     // => true
     *     arr.contains(3, 4);  // => false
     *     arr.contains(3, -4); // => true
     *     arr.contains("6");   // => false
     *
     * @param Object item チェックするオブジェクト
     * @param {Number} [fromIndex=0] 検索を始める位置。負数を指定した場合は末尾からのオフセットと見なします。
     * @return {Boolean} チェックの結果
     */
    contains(item: T, fromIndex?: number): boolean;

    /**
     * @method at
     * 指定したインデックスの要素を返します（ループ・負数の指定可）。
     *
     * 添字が負数の場合は末尾からのオフセットとみなします。末尾の要素が -1 番目になります。  
     * 添字の絶対値が Array.length 以上の場合はループします。
     *
     * ### Example
     *     arr = ['a', 'b', 'c', 'd', 'e', 'f'];
     *     arr.at(0);  // => 'a'
     *     arr.at(6);  // => 'a'
     *     arr.at(13); // => 'b'
     *     arr.at(-1); // => 'f'
     *     arr.at(-8); // => 'e'
     *
     * @param {Number} index 添字
     * @return Object 添字で指定された要素
     */
    at(i: number): T;

    /**
     * @method find
     * 各要素を引数にして関数を実行し、その値が真となる（＝条件にマッチする）最初の要素を返します。
     *
     * どの要素もマッチしなければ undefined を返します。
     *
     * ### Example
     *     arr = ['foo', 'bar', 'hoge', 'fuga'];
     *     arr.find( function(elm) {
     *       return elm.indexOf('a') >= 0;
     *     });
     *     // => 'bar'
     *
     * @param {Function} callback 各要素に対して実行するコールバック関数
     * @param Object [self=this] callback 内で this として参照される値。デフォルトは呼び出し時の this。
     * @return Object 条件にマッチした最初の要素、または undefined
     */
    find(fn: Function, self?: {}): T | undefined;

    /**
     * @method findIndex
     * 各要素を引数にして関数を実行し、その値が真となる（＝条件にマッチする）最初のインデックスを返します。
     *
     * どの要素もマッチしなければ -1 を返します。
     *
     * ### Example
     *     arr = ['foo', 'bar', 'hoge', 'fuga'];
     *     arr.findIndex( function(elm) {
     *       return elm.indexOf('a') >= 0;
     *     });
     *     // => 1
     *
     * @param {Function} callback 各要素に対して実行するコールバック関数
     * @param Object [self=this] callback 内で this として参照される値。デフォルトは呼び出し時の this。
     * @return Object 条件にマッチした最初のインデックス、または -1
     */
    findIndex(fn: Function, self?: {}): number | undefined;

    /**
     * @method swap
     * @chainable
     * a 番目の要素 と b 番目の要素を入れ替えます。
     *
     * ### Example
     *     arr1 = ['a', 'b', 'c', 'd'];
     *     arr2 = arr1.swap(0, 3); // => ['d', 'b', 'c', 'a']
     *     arr1 === arr2;          // => true
     *
     * @param {Number} a  インデックス
     * @param {Number} b  インデックス
     */
    swap(a: number, b: number): this;

    /**
     * @method erase
     * @chainable
     * 指定したオブジェクトと一致した最初の要素を削除します。
     *
     * ### Example
     *     arr1 = ['a', 'b', 'b', 'c'];
     *     arr2 = arr1.erase('b'); // => ['a', 'b', 'c']
     *     arr1 === arr2;          // => true
     *
     * @param Object elm 削除したいオブジェクト
     */
    erase(elm: T): this;

    /**
     * @method eraseAll
     * @chainable
     * 指定したオブジェクトと一致したすべての要素を削除します。
     *
     * ### Example
     *     arr1 = ['a', 'b', 'b', 'c'];
     *     arr2 = arr1.eraseAll('b'); // => ['a', 'c']
     *     arr1 === arr2;             // => true
     *
     * @param Object elm 削除したいオブジェクト
     */
    eraseAll(elm: T): this;

    /**
     * @method eraseIf
     * @chainable
     * 各要素を引数にして関数を実行し、その値が真となる（＝条件にマッチする）最初の要素を削除します。
     *
     * どの要素もマッチしなければ何も起きません。
     *
     * ### Example
     *     arr = ['foo', 'bar', 'hoge', 'fuga'];
     *     arr.eraseIf( function(elm) {
     *       return elm.indexOf('o') >= 0;
     *     });
     *     // => ['bar', 'hoge', 'fuga']
     *
     * @param {Function} callback 各要素に対して実行するコールバック関数
     */
    eraseIf(fn: Function): this;

    /**
     * @method eraseIfAll
     * @chainable
     * 各要素を引数にして関数を実行し、その値が真となる（＝条件にマッチする）すべての要素を削除します。
     *
     * どの要素もマッチしなければ何も起きません。
     *
     * ### Example
     *     arr = ['foo', 'bar', 'hoge', 'fuga'];
     *     arr.eraseIfAll( function(elm) {
     *       return elm.indexOf('o') >= 0;
     *     });
     *     // => ['bar', 'fuga']
     *
     * @param {Function} callback 各要素に対して実行するコールバック関数
     */
    eraseIfAll(fn: Function): this;

    /**
     * @method random
     * 配列からランダムに1つ取り出した要素を返します。
     *
     * 取り出す範囲をインデックスで指定することもできます。  
     * {@link #pickup}、{@link #lot} と同じです。  
     *
     * ### Example
     *     arr = ['foo', 'bar', 'hoge', 'fuga'];
     *     arr.random(2, 3);  // => 'hoge' または 'fuga'
     *
     * @param {Number} [min=0] インデックスの下限
     * @param {Number} [max=配列の最大インデックス] インデックスの上限
     * @return Object ランダムに1つ取り出した要素
     */
    random(min?: number, max?: number): T;

    /**
     * @method pickup
     * 配列からランダムで1つ取り出した要素を返します。
     *
     * {@link #random}、{@link #lot} と同じです。
     * @inheritdoc #random
     */
    pickup(min?: number, max?: number): T;

    /**
     * @method lot
     * 配列からランダムで1つ取り出した要素を返します。
     *
     * {@link #random}、{@link #pickup} と同じです。
     * @inheritdoc #random
     */
    lot(min?: number, max?: number): T;

    /**
     * @method uniq
     * 要素の重複を取り除いた配列を生成して返します。
     *
     * 自分自身は破壊されません。
     *
     * ### Example
     *     arr = [1, 2, 3, 4, 3, 2];
     *     arr.uniq(); // => [1, 2, 3, 4]
     *
     * @param {Number} [deep] ※未使用
     * @return Object 新しい配列
     */
    uniq(deep: number): T[];

    /**
     * @method flatten
     * 自身を再帰的に平滑化した配列を生成して返します。
     *
     * level を指定しなければ深さの際限なく完全に平滑化します。
     *
     * ### Example
     *     arr = [1, 2, [3, [4, 5]]];
     *     arr.flatten();  // => [1, 2, 3, 4, 5]
     *     arr.flatten(1); // => [1, 2, 3, [4, 5]]
     *
     * @param {Number} [level=0]  平滑化の再帰の深さ
     * @return Object 平滑化した配列
     */
    flatten(level?: number): T[];

    /**
     * @method clone
     * 自身のコピーを生成して返します。
     *
     * ### Example
     *     arr1 = [1, 2, [3, 4]];
     *     arr2 = arr1.clone();      // => [1, 2, [3, 4]]
     *     arr1[2] === arr2[2];      // => true
     *     arr1[2][0] = 9;
     *     arr2;                     // => [1, 2, [9, 4]]
     *     arr1 = [1, 2, [3, 4]];
     *     arr2 = arr1.clone(true);  // => [1, 2, [3, 4]]
     *     arr1[2] === arr2[2];      // => false
     *     arr1[2][0] = 9;
     *     arr2;                     // => [1, 2, [3, 4]]
     *
     * @param {Boolean} [deep=false] 配列のネストをたどって複製するかどうか
     * @return Object 新しい配列
     */
    clone(deep?: boolean): T[];

    /**
     * @method clear
     * @chainable
     * 自身を空の配列にします。
     *
     * ### Example
     *     arr = [1, 2, [3, 4]];
     *     arr.clear(); // => []
     */
    clear(): this;

    /**
     * @method fill
     * @chainable
     * 自身の一部の要素を特定の値で埋めます。
     *
     * ### Example
     *     arr = [1, 2, 3, 4, 5];
     *     arr.fill("x");       // => ["x", "x", "x", "x", "x"]
     *     arr.fill("x", 2, 4); // => [1, 2, "x", "x", 5]
     *
     * @param Object value 埋める値
     * @param {Number} [start=0] 値を埋める最初のインデックス
     * @param {Number} [end=自身の配列の長さ] 値を埋める最後のインデックス+1
     */
    fill(value: T, start?: number, end?: number): this;

    /**
     * @method range
     * @chainable
     * 自身を等差数列（一定間隔の整数値の列）とします。
     *
     * - 引数が1つの場合、0～end（end含まず）の整数の配列です。  
     * - 引数が2つの場合、start～end（end含まず）の整数の配列です。  
     * - 引数が3つの場合、start～end（end含まず）かつ start + n * step (nは整数)を満たす整数の配列です。
     *
     * ### Example
     *     arr = [];
     *     arr.range(4);        // => [0, 1, 2, 3]
     *     arr.range(2, 5);     // => [2, 3, 4]
     *     arr.range(2, 14, 5); // => [2, 7, 12]
     *     arr.range(2, -3);    // => [2, 1, 0, -1, -2]
     *
     * @param {Number} start 最初の値（デフォルトは 0）
     * @param {Number} end 最後の値（省略不可）
     * @param {Number} [step=1または-1] 間隔
     */
    range(start: number, end: number, step?: number): this;

    /**
     * @method shuffle
     * @chainable
     * 自身の要素をランダムにシャッフルします。
     *
     * ### Example
     *     arr = [1, 2, 3, 4, 5];
     *     arr.shuffle(); // => [5, 1, 4, 2, 3] など
     */
    shuffle(): this;

    /**
     * @method sum
     * 要素の合計値を返します。
     *
     * 要素に数値以外が含まれる場合の挙動は不定です。
     *
     * ### Example
     *     arr = [1, 2, 3, 4, 5, 6];
     *     arr.sum(); // => 21
     *
     * @return {Number} 合計
     */
    sum(): number;

    /**
     * @method average
     * 要素の平均値を返します。
     *
     * 要素に数値以外が含まれる場合の挙動は不定です。
     *
     * ### Example
     *     arr = [1, 2, 3, 4, 5, 6]
     *     arr.average(); // => 3.5
     *
     * @return {Number} 平均値
     */
    average(): number;

    /**
     * @method each
     * @chainable
     * 要素を順番に渡しながら関数を繰り返し実行します。
     *
     * メソッドチェーンに対応していますが、このメソッドによって自分自身は変化しません。
     *
     * ###Reference
     * - [Array.prototype.forEach() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
     *
     * ### Example
     *     arr = [1, 2, 3];
     *     arr.each( function(elm) {
     *       console.log(elm * elm)
     *     });
     *     // => 1
     *     //    4
     *     //    9
     *
     * @param {Function} callback 各要素に対して実行するコールバック関数
     * @param Object [self=this] callback 内で this として参照される値
     */
    each(callback: Function, self?: {}): this;

    /**
     * @method toULElement
     * ULElement に変換します（未実装）
     */
    toULElement(): void;

    /**
     * @method toOLElement
     * OLElement に変換します（未実装）
     */
    toOLElement(): void;

    /**
     * @method most
     * 指定した関数の返り値が最小となる要素と最大となる要素をまとめて返します。
     *
     * 空の配列に対して実行すると {max: Infinity, min: -Infinity} を返します。
     *
     * ### Example
     *     [5,1,4,1,9,2,-10].most(); // => {max:9, min: -10}
     *
     *     points = [ {x:0, y:0}, {x:640, y:960}, {x:-80, y:100} ];
     *     points.most(function(e){return e.x;}).min; // => [x:-80, y:100]
     *     points.most(function(e){return e.y;}).max; // => [x:640, y:960]
     *
     * @param {Function} [callback] 各要素に対して実行するコールバック関数
     * @param Object [self=this] 関数内で this として参照される値。デフォルトは自分自身。
     * @return Object max と min をキーに持つオブジェクト
     * @return Object return.min 関数の返り値が最小となる要素
     * @return Object return.max 関数の返り値が最大となる要素
     */
    most(func?: Function, self?: {}): { max: T, min: T };

}

interface ArrayConstructor {
    /**
     * @method range
     * @static
     * インスタンスメソッドの {@link #range} と同じです。
     *
     * ### Example
     *     Array.range(2, 14, 5); // => [2, 7, 12]
     */
    range<T>(start: number, end: number, step?: number): T[];

    /**
     * @method of
     * @static
     * ES6 準拠の of 関数です。可変長引数をとって Array オブジェクトにして返します。
     *
     * ### Example
     *     Array.of();        // => []
     *     Array.of(1, 2, 3); // => [1, 2, 3]
     *
     * @param Object elementN 生成する配列の要素
     * @return {Array} 生成した配列
     */
    of<T>(...args: T[]): T[];
    of(...args: any[]): any[];

    /**
     * @method from
     * @static
     * ES6 準拠の from 関数です。array-like オブジェクトかiterable オブジェクトから新しい配列を生成します。
     *
     * array-like オブジェクトとは、length プロパティを持ち、数字の添字でアクセス可能なオブジェクトのことです。
     * 通常の配列のほか、String、arguments、NodeList なども array-like オブジェクトです。
     *
     * iterable オブジェクトとは、Symbol.iterator プロパティを持つオブジェクトのことです。
     * 通常の配列のほか、String、arguments、NodeList なども iterable オブジェクトです。
     *
     * ### Example
     *     Array.from([1, 2, 3], function(elm){ return elm * elm} ); // => [1, 4, 9]
     *     Array.from("foo");                                        // => ["f", "o", "o"]
     *     Array.from( document.querySelectorAll("span"))            // => [Element, Element, Element,...]
     *
     * @param Object arrayLike 配列に変換する array-like オブジェクト
     * @param {Function} [callback] arrayLike のすべての要素に対して実行するマップ関数
     * @param Object [context] callback 内で this として参照される値
     * @return {Array} 生成した配列
     */
    from<T>(arrayLike: { length: number, [i: number]: T }, callback?: Function, context?: {}): T[];

}
// #endregion Array<T>
//=============================================================
// #region Date
/**
 * @class global.Date
 * # 拡張した Date クラス
 * 日付を扱う Date クラスを拡張しています。
 */
interface Date {
    /**
     * @method format
     * 指定したフォーマットに従って日付を文字列化します。
     *
     * <table border="1">
     *   <tr><td>変換指定文字列</td><td>意味</td></tr>
     *   <tr><td>yyyy</td><td>西暦年（4桁）</td></tr>
     *   <tr><td>yy</td><td>西暦年（2桁）</td></tr>
     *   <tr><td>y</td><td>西暦年</td></tr>
     *   <tr><td>MMMM</td><td>月（英語名）</td></tr>
     *   <tr><td>MMM</td><td>月（英語省略名）</td></tr>
     *   <tr><td>MM</td><td>月（2桁数字）</td></tr>
     *   <tr><td>M</td><td>月</td></tr>
     *   <tr><td>dd</td><td>日（2桁）</td></tr>
     *   <tr><td>d</td><td>日</td></tr>
     *   <tr><td>EEEE</td><td>曜日（英語名）</td></tr>
     *   <tr><td>EEE</td><td>曜日（英語省略名）</td></tr>
     *   <tr><td>HH</td><td>時（24時間表記・2桁）</td></tr>
     *   <tr><td>H</td><td>時（24時間表記）</td></tr>
     *   <tr><td>mm</td><td>分（2桁）</td></tr>
     *   <tr><td>m</td><td>分</td></tr>
     *   <tr><td>ss</td><td>秒（2桁）</td></tr>
     *   <tr><td>s</td><td>秒</td></tr>
     * </table>
     * 桁数が指定されているものは0パディングされます。
     *
     * ### Example
     *     (new Date()).format("yyyy-MM-dd(EEE)"); // => "2016-04-05(Tue)" など
     *
     * @param {String} pattern フォーマット文字列
     * @return {String} フォーマット文字列に従って生成された文字列
     */
    format(pattern: string): string;

    /**
     * @method calculateAge
     * @static
     * 指定した誕生日から、現在または指定した日付における年齢を計算します。
     *
     * ###Reference
     * - [Javascriptで誕生日から現在の年齢を算出](http://qiita.com/n0bisuke/items/dd537bd4cbe9ab501ce8)
     *
     * ### Example
     *     Date.calculateAge("1990-01-17"); // => 26 など
     *
     * @param {String/Date} birthday 誕生日
     * @param {String/Date} [when=本日] 基準の日付
     * @return {Number} 年齢
     */
    calculateAge(birthday: string | Date, when: string | Date): number;
}
// #endregion Date
//=============================================================
// #region Math
/**
 * @class global.Math
 * # 拡張した Math クラス
 * 数学的な処理を扱う Math クラスを拡張しています。
 */
interface Math {
    /**
     * @property DEG_TO_RAD
     * 度をラジアンに変換するための定数です。
     */
    readonly DEG_TO_RAD: number;

    /**
     * @property RAD_TO_DEG
     * ラジアンを度に変換するための定数です。
     */
    readonly RAD_TO_DEG: number;

    /**
     * @property PHI
     * 黄金比です。
     */
    readonly PHI: number;

    /**
     * @static
     * @method degToRad
     * 度をラジアンに変換します。
     *
     * ### Example
     *     Math.degToRad(180); // => 3.141592653589793
     *
     * @param {Number} deg 度
     * @return {Number} ラジアン
     */
    degToRad(deg: number): number;

    /**
     * @static
     * @method radToDeg
     * ラジアンを度に変換します。
     *
     * ### Example
     *     Math.radToDeg(Math.PI/4); // => 45
     *
     * @param {Number} rad ラジアン
     * @return {Number} 度
     */
    radToDeg(rad: number): number;

    /**
     * @static
     * @method clamp
     * 指定した値を指定した範囲に収めた結果を返します。
     *
     * ### Example
     *     Math.clamp(120, 0, 640); // => 120
     *     Math.clamp(980, 0, 640); // => 640
     *     Math.clamp(-80, 0, 640); // => 0
     *
     * @param {Number} value 値
     * @param {Number} min  範囲の下限
     * @param {Number} max  範囲の上限
     * @return {Number} 丸めた結果の値
     */
    clamp(value: number, min: number, max: number): number;

    /**
     * @static
     * @method inside
     * 指定した値が指定した値の範囲にあるかどうかを返します。
     *
     * ### Example
     *     Math.inside(980, 0, 640); // => false
     *     Math.inside(120, 0, 640); // => true
     *
     * @param {Number} value チェックする値
     * @param {Number} min  範囲の下限
     * @param {Number} max  範囲の上限
     * @return {Boolean} 範囲内に値があるかないか
     */
    inside(value: number, min: number, max: number): boolean;

    /**
     * @static
     * @method randint
     * 指定された範囲内でランダムな整数値を生成します。
     *
     * ### Example
     *     Math.randint(-4, 4); // => -4、0、3、4 など
     *
     * @param {Number} min  範囲の最小値
     * @param {Number} max  範囲の最大値
     * @return {Number} ランダムな整数値
     */
    randint(min: number, max: number): number;

    /**
     * @static
     * @method randfloat
     * 指定された範囲内でランダムな数値を生成します。
     *
     * ### Example
     *     Math.randfloat(-4, 4); // => -2.7489193824000937 など
     *
     * @param {Number} min  範囲の最小値
     * @param {Number} max  範囲の最大値
     * @return {Number} ランダムな数値
     */
    randfloat(min: number, max: number): number;

    /**
     * @static
     * @method randbool
     * ランダムに真偽値を生成します。
     * 引数で百分率を指定する事もできます。
     *
     * ### Example
     *     Math.randbool();   // => true または false
     *     Math.randbool(80); // => 80% の確率で true
     *
     * @param {Number} percent  真になる百分率
     * @return {Boolean} ランダムな真偽値
     */
    randbool(percent?: number): boolean;
}
// #endregion Math
//=============================================================
// #region phina
/*
 * phina.js namespace
 */
declare module phina {
    /**
     * バージョン
     */
    const VERSION: string;

    /**
     * @method isNode
     * @member phina
     * @static
     */
    export function isNode(): boolean;

    /**
     * @method namespace
     * @member phina
     * @static
     */
    export function namespace(fn: Function): void;

    /**
     * @method global
     * global
     */
    const global: any;

    /**
     * @method testUA
     * UAを正規表現テスト
     * @member phina
     * @static
     */
    export function testUA(regExp: string): boolean;

    /**
     * @method isAndroid
     * Android かどうかをチェック
     * @member phina
     * @static
     */
    export function isAndroid(): boolean;

    /**
     * @method isIPhone
     * iPhone かどうかをチェック
     * @member phina
     * @static
     */
    export function isIPhone(): boolean;

    /**
     * @method isIPad
     * iPad かどうかをチェック
     * @member phina
     * @static
     */
    export function isIPad(): boolean;

    /**
     * @method isIOS
     * iOS かどうかをチェック
     * @member phina
     * @static
     */
    export function isIOS(): boolean;

    /**
     * @method isMobile
     * mobile かどうかをチェック
     * @member phina
     * @static
     */
    export function isMobile(): boolean;

    /**
     * @member phina
     * @static
     * @method createClass
     * クラスを生成
     */
    export function createClass(params: {}): {};

    /**
     * @method using
     * @member phina
     * @static
     */
    export function using(path?: string): any;

    /**
     * @method register
     * 
     * @member phina
     * @static
     */
    export function register(path: string, _class: any): any;

    /**
     * @member phina
     * @static
     * @method define
     * クラスを定義
     */
    export function define(path: string, params: {}): {};

    /**
     * @method globalize
     * @member phina
     * @static
     */
    export function globalize(): void;

    export function main(func: Function): void;
}
// #endregion phina
// #endregion global
//=============================================================
// #region phina.geom
// #region phina.geom.Vector2
declare module phina.geom {
    /**
     * @class phina.geom.Vector2
     * # 2次元ベクトルクラス
     * 2次元のベクトルや座標を表すクラスです。
     */
    export class Vector2 {
        /** x座標 */
        x: number;
        /** y座標 */
        y: number;

        /**
         * @method init
         * 2次元ベクトルのコンストラクタです。
         *
         * ### Example
         *     v = phina.geom.Vector2(3, 4);
         *
         * @param {Number} x ベクトルの x 座標
         * @param {Number} y ベクトルの y 座標
         * @return {phina.geom.Vector2} 2次元ベクトルオブジェクト
         */
        constructor(x: number, y: number);

        /**
         * @method clone
         * this のコピーを生成して返します。
         *
         * ### Example
         *     v = phina.geom.Vector2(3, 4);
         *     v2 = v.clone();
         *     v2.x == v.x; // => true
         *
         * @return Object 生成したベクトル
         */
        clone(): Vector2;

        /**
         * @method equals
         * this の各要素がすべて other と等しいかどうかを返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 4);
         *     v2 = phina.geom.Vector2(5, 6);
         *     v1.equals(v2); // => false
         *
         * @param {phina.geom.Vector2} other 比較する対象のベクトル
         * @return {Boolean} 等しいかどうか
         */
        equals(): boolean;

        /**
         * @method add
         * @chainable
         * this に other を加えます。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 4);
         *     v2 = phina.geom.Vector2(5, 6);
         *     v1.add(v2); // => phina.geom.Vector(8, 10)
         *
         * @param {phina.geom.Vector2} other ベクトル
         * @return {phina.geom.Vector2} 加算した結果のベクトル
         */
        add(v: Vector2): this;

        /**
         * @method sub
         * @chainable
         * this から other を減じます。
         *
         * ベクトルが座標を表す場合は、指定した座標から自分自身へと向かうベクトルが得られます。
         * 
         * ### Example
         *     v1 = phina.geom.Vector2(3, 4);
         *     v2 = phina.geom.Vector2(1, 5);
         *     v1.sub(v2); // => phina.geom.Vector(2, -1)
         *
         * @param {phina.geom.Vector2} other ベクトル
         * @return {phina.geom.Vector2} 減算した結果のベクトル
         */
        sub(v: Vector2): this;

        /**
         * @method mul
         * @chainable
         * this の各要素に数値 n を乗じます。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 4);
         *     v1.mul(3) // => phina.geom.Vector(9, 12)
         *
         * @param {Number} n 乗じる値
         * @return {phina.geom.Vector2} 乗算した結果のベクトル
         */
        mul(v: Vector2): this;

        /**
         * @method div
         * @chainable
         * this の各要素を数値 n で割ります。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(8, 16);
         *     v1.div(2) // => phina.geom.Vector(4, 8)
         *
         * @param {Number} n 割る値
         * @return {phina.geom.Vector2} 除算した結果のベクトル
         */
        div(v: Vector2): this;

        /**
         * @method negate
         * @chainable
         * this の各要素の正負を反転します。
         *
         * this と同じ大きさで方向が逆のベクトルが得られます。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, -4);
         *     v1.negate() // => phina.geom.Vector(-3, 4)
         *
         * @return {phina.geom.Vector2} 反転後のベクトル
         */
        negate(): this;

        /**
         * @method dot
         * other との内積を返します。
         *
         * 投影ベクトルを求めたり、類似度の計算に利用することができます。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 4);
         *     v2 = phina.geom.Vector2(-2, 2);
         *     v1.dot(v2) // => 2
         *
         * @param {phina.geom.Vector2} other ベクトル
         * @return {Number} 内積
         */
        dot(v: Vector2): number;

        /**
         * @method cross
         * other との外積（クロス積）を返します。
         *
         * 2次元ベクトルでの外積はベクトルでなく数値を返すことに注意してください。
         * other より this 時計回りにあるときは正の値になり、反時計回りにあるときは負の値になります。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 4);
         *     v2 = phina.geom.Vector2(3, 1);
         *     v1.cross(v2) // => -8
         *
         * @param {phina.geom.Vector2} other ベクトル
         * @return {Number} 外積
         */
        cross(v: Vector2): number;

        /**
         * @method length
         * this の大きさを返します。
         *
         * (memo) magnitude って名前の方が良いかも. 検討中.
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 4);
         *     v1.length(); // => 5
         *
         * @return {Number} ベクトルの大きさ
         */
        length(): number;

        /**
         * @method lengthSquared
         * this の大きさの自乗を返します。
         *
         * C# の名前を引用（or lengthSquare or lengthSqrt）
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 4);
         *     v1.lengthSquared(); // => 25
         *
         * @return {Number} ベクトルの大きさの自乗
         */
        lengthSquared(): number;

        /**
         * @method distance
         * this と other を座標とみなしたときの2点間の距離を返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(1, 2);
         *     v2 = phina.geom.Vector2(4, 6);
         *     v1.distance(v2); // => 5
         *
         * @param {phina.geom.Vector2} other 座標を表すベクトル
         * @return {Number} 2点間の距離
         */
        distance(v: Vector2): number;

        /**
         * @method distanceSquared
         * this と other を座標とみなしたときの2点間の距離の自乗を返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(1, 2);
         *     v2 = phina.geom.Vector2(4, 6);
         *     v1.distanceSquared(v2); // => 25
         *
         * @param {phina.geom.Vector2} other 座標を表すベクトル
         * @return {Number} 2点間の距離の自乗
         */
        distanceSquared(v: Vector2): number;

        /**
         * @method random
         * @chainable
         * 角度が min から max の範囲（度単位）で大きさが len のランダムなベクトルを返します。
         *
         * ### Example
         *     phina.geom.Vector2().random(90, 180, 1); // => phina.geom.Vector2(-0.5, 0.866) など
         *
         * @param {Number} [min=0] 角度（度単位）の下限値
         * @param {Number} [max=360] 角度（度単位）の上限値
         * @param {Number} [len=1] 大きさ
         * @return {phina.geom.Vector2} ランダム化したベクトル
         */
        random(min?: number, max?: number, len?: number): Vector2;

        /**
         * @method normalize
         * @chainable
         * this を正規化します。すなわち、this と同じ方向で大きさが1のベクトルを返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 4);
         *     v1.normalize(); // => phina.geom.Vector2(0.6, 0.8)
         *
         * @return {phina.geom.Vector2} 正規化したベクトル
         */
        normalize(): this;

        /**
         * @method toString
         * this を JSON 形式で表現した文字列を返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 4);
         *     v1.toString(); // => "{x:3, y:4}"
         *
         * @return {String} JSON 文字列
         */
        toString(): string;

        /**
         * @method getDirection
         * this のおおよその方向を示した文字列を返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 4);
         *     v1.getDirection(); // => "up"
         *
         * @return {String} 方向を表す文字列（"up", "right", "down", "left"）
         */
        getDirection(): string;

        /**
         * @method toAngle
         * this と x 軸との角度（ラジアン単位）を返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(-2, 0);
         *     v1.toAngle(); // => 3.14159
         *
         * @return {Number} ベクトルの角度（ラジアン単位）
         */
        toAngle(): number;

        /**
         * @method fromAngle
         * @chainable
         * 角度（ラジアン単位）と大きさを指定してベクトルを設定します。
         *
         * ### Example
         *     phina.geom.Vector2().fromAngle(Math.PI/4, 2); // => phina.geom.Vector2(1.4142, 1.4142)
         *
         * @param {Number} rad 角度（ラジアン単位）
         * @param {Number} [len=1] 大きさ
         * @return {phina.geom.Vector2} ベクトル
         */
        fromAngle(rad: number, len?: number): this;

        /**
         * @method toDegree
         * this と x 軸との角度（度単位）を返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(-2, 2);
         *     v1.toAngle(); // => 135
         *
         * @return {Number} ベクトルの角度（度単位）
         */
        toDegree(): number;

        /**
         * @method fromDegree
         * @chainable
         * 角度（度単位）と大きさを指定してベクトルを設定します。
         *
         * ### Example
         *     phina.geom.Vector2().fromDegree(60, 2); // => phina.geom.Vector2(1, 1.732)
         *
         * @param {Number} deg 角度（度単位）
         * @param {Number} [len=1] 大きさ
         * @return {phina.geom.Vector2} ベクトル
         */
        fromDegree(deg: number, len?: number): this;

        /**
         * @method rotate
         * @chainable
         * this を回転します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 1);
         *     v1.rotate(Math.PI/2); // => phina.geom.Vector2(-1, 3);
         *
         * @param {Number} rad 角度（ラジアン単位）
         * @param {Number} [center=(0, 0)] 回転の中心座標
         * @return {Number} 回転後のベクトル
         */
        rotate(rad: number, center?: Vector2): this;

        /**
         * @method min
         * @static
         * v1 と v2 の各要素に対し、より小さい方を要素とする新しいベクトルを生成して返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 1);
         *     v2 = phina.geom.Vector2(-3, 2);
         *     phina.geom.Vector2.min(v1, v2); // phina.geom.Vector2(-3, 1);
         *
         * @param {phina.geom.Vector2} v1 ベクトル
         * @param {phina.geom.Vector2} v2 ベクトル
         * @return {phina.geom.Vector2} 生成したベクトル
         */
        static min(a: Vector2, b: Vector2): Vector2;

        /**
         * @method max
         * @static
         * 2次元ベクトル v1 と v2 の各要素に対し、より大きい方を要素とする新しいベクトルを生成して返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 1);
         *     v2 = phina.geom.Vector2(-3, 2);
         *     phina.geom.Vector2.max(v1, v2); // phina.geom.Vector2(3, 2);
         *
         * @param {phina.geom.Vector2} v1 ベクトル
         * @param {phina.geom.Vector2} v2 ベクトル
         * @return {phina.geom.Vector2} 生成したベクトル
         */
        static max(a: Vector2, b: Vector2): Vector2;

        /**
         * @method add
         * @static
         * v1 に v2 を加算した新しいベクトルを生成して返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 1);
         *     v2 = phina.geom.Vector2(-3, 2);
         *     phina.geom.Vector2.add(v1, v2); // phina.geom.Vector2(0, 3);
         *
         * @param {phina.geom.Vector2} v1 ベクトル
         * @param {phina.geom.Vector2} v2 ベクトル
         * @return {phina.geom.Vector2} 加算した結果
         */
        static add(lhs: Vector2, rhs: Vector2): Vector2;

        /**
         * @method sub
         * @static
         * 2次元ベクトル v1 から v2 を減じた新しいベクトルを生成して返します。
         *
         * ベクトルが座標を表す場合、2つ目の座標から1つ目の座標へと向かうベクトルが得られます。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 1);
         *     v2 = phina.geom.Vector2(-3, 2);
         *     phina.geom.Vector2.sub(v1, v2); // phina.geom.Vector2(6, -1);
         *
         * @param {phina.geom.Vector2} v1 ベクトル
         * @param {phina.geom.Vector2} v2 ベクトル
         * @return {phina.geom.Vector2} 減算した結果
         */
        static sub(lhs: Vector2, rhs: Vector2): Vector2;

        /**
         * @method mul
         * @static
         * 2次元ベクトル v の各要素に n を乗じた新しいベクトルを生成して返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 1);
         *     phina.geom.Vector2.mul(v1, 2); // phina.geom.Vector2(6, 2)
         *
         * @param {phina.geom.Vector2} v ベクトル
         * @param {phina.geom.Vector2} n 乗じる値
         * @return {phina.geom.Vector2} 乗算した結果
         */
        static mul(a: Vector2, b: number): Vector2;

        /**
         * @method div
         * @static
         * 2次元ベクトル v の各要素を n で割った新しいベクトルを生成して返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 1);
         *     phina.geom.Vector2.div(v1, 2); // phina.geom.Vector2(1.5, 0.5)
         *
         * @param {phina.geom.Vector2} v ベクトル
         * @param {phina.geom.Vector2} n 割る値
         * @return {phina.geom.Vector2} 除算した結果
         */
        static div(v: Vector2, n: number): Vector2;

        /**
         * @method negate
         * @static
         * 2次元ベクトル v を反転した新しいベクトルを生成して返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 1);
         *     phina.geom.Vector2.negate(); // phina.geom.Vector2(-3, -1)
         *
         * @param {phina.geom.Vector2} v ベクトル
         * @return {phina.geom.Vector2} 反転したベクトル
         */
        static negate(v: Vector2): Vector2;

        /**
         * @method dot
         * @static
         * 2次元ベクトル v1 と v2 の内積を返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 4);
         *     v2 = phina.geom.Vector2(-2, 2);
         *     phina.geom.Vector2.dot(v1, v2) // => 2
         *
         * @param {phina.geom.Vector2} v1 ベクトル
         * @param {phina.geom.Vector2} v2 ベクトル
         * @return {phina.geom.Vector2} 内積
         */
        static dot(lhs: Vector2, rhs: Vector2): number;

        /**
         * @method cross
         * @static
         * 2次元ベクトル v1 と v2 の外積（クロス積）を返します。
         *
         * 2次元ベクトルでの外積はベクトルでなく数値を返すことに注意してください。
         * 1つ目のベクトルが2つ目のベクトルより時計回りにあるときは正の値になり、反時計回りにあるときは負の値になります。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(3, 4);
         *     v2 = phina.geom.Vector2(3, 1);
         *     phina.geom.Vector2.cross(v1, v2); // => -8
         *
         * @param {phina.geom.Vector2} v1 ベクトル
         * @param {phina.geom.Vector2} v2 ベクトル
         * @return {Number} 外積
         */
        static cross(lhs: Vector2, rhs: Vector2): number;

        /**
         * @method distance
         * @static
         * v1 と v2 を座標とみなしたときの2点間の距離を返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(1, 2);
         *     v2 = phina.geom.Vector2(4, 6);
         *     phina.geom.Vector2.distance(v1, v2); // => 5
         *
         * @param {phina.geom.Vector2} v1 座標を表すベクトル
         * @param {phina.geom.Vector2} v2 座標を表すベクトル
         * @return {Number} 2点間の距離
         */
        static distance(lhs: Vector2, rhs: Vector2): number;

        /**
         * @method distanceSquared
         * @static
         * v1 と v2 を座標とみなしたときの2点間の距離の自乗を返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(1, 2);
         *     v2 = phina.geom.Vector2(4, 6);
         *     phina.geom.Vector2.distanceSquared(v1, v2); // => 25
         *
         * @param {phina.geom.Vector2} v1 座標を表すベクトル
         * @param {phina.geom.Vector2} v2 座標を表すベクトル
         * @return {Number} 2点間の距離の自乗
         */
        static distanceSquared(lhs: Vector2, rhs: Vector2): number;

        /**
         * @method manhattanDistance
         * @static
         * v1 と v2 を座標とみなしたときの2点間のマンハッタン距離（軸に平行に進むときの最短距離）を返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(1, 2);
         *     v2 = phina.geom.Vector2(4, 6);
         *     phina.geom.Vector2.manhattanDistance(v1, v2); // => 7
         *
         * @param {phina.geom.Vector2} v1 座標を表すベクトル
         * @param {phina.geom.Vector2} v2 座標を表すベクトル
         * @return {Number} 2点間のマンハッタン距離
         */
        static manhattanDistance(lhs: Vector2, rhs: Vector2): number;

        /**
         * @method normal
         * @static
         * v1 と v2 を座標とみなしたときの、v2 から v1 に向かうベクトルに対する法線ベクトルを返します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(1, 2);
         *     v2 = phina.geom.Vector2(4, 6);
         *     phina.geom.Vector2.normal(v1, v2); // => phina.geom.Vector2(4, -3)
         *
         * @param {phina.geom.Vector2} v1 座標を表すベクトル
         * @param {phina.geom.Vector2} v2 座標を表すベクトル
         * @return {phina.geom.Vector2} 法線ベクトル
         */
        static normal(a: Vector2, b: Vector2): Vector2;

        /**
         * @method reflect
         * @static
         * 2次元ベクトル v を壁への入射ベクトルとして、壁に反射した際のベクトル（反射ベクトル）を返します。
         *
         * 壁の向きは法線ベクトル normal によって表します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(4, 3);
         *     normal = phina.geom.Vector2(-1, 1);
         *     phina.geom.Vector2.reflect(v1, normal); // => phina.geom.Vector2(2, 5)
         *
         * @param {phina.geom.Vector2} v 入射ベクトル
         * @param {phina.geom.Vector2} normal 壁の法線ベクトル
         * @return {phina.geom.Vector2} 反射ベクトル
         */
        static reflect(v: Vector2, normal: Vector2): Vector2;

        /**
         * @method wall
         * @static
         * 2次元ベクトル v を壁への入射ベクトルとして、壁に沿ったベクトル（壁ずりクトル）を返します。
         *
         * 壁の向きは法線ベクトル normal によって表します。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(4, 3);
         *     normal = phina.geom.Vector2(-1, 1);
         *     phina.geom.Vector2.wall(v1, normal); // => phina.geom.Vector2(3, 4)
         *
         * @param {phina.geom.Vector2} v 入射ベクトル
         * @param {phina.geom.Vector2} normal 壁の法線ベクトル
         * @return {phina.geom.Vector2} 壁ずりベクトル
         */
        static wall(v: Vector2, normal: Vector2): Vector2;

        /**
         * @method lerp
         * @static
         * v1 と v2 を媒介変数 t で線形補間します。
         * t=0.5 で v1 と v2 の中間ベクトルを求めることができます。
         *
         * ### Example
         *     v1 = phina.geom.Vector2(1, 2);
         *     v2 = phina.geom.Vector2(4, 6);
         *     phina.geom.Vector2.lerp(v1, v2, 0.5); // => (2.5, 4)
         *     phina.geom.Vector2.lerp(v1, v2, 0); // => (1, 2)
         *     phina.geom.Vector2.lerp(v1, v2, 1); // => (4, 6)
         * 
         * @param {phina.geom.Vector2} v1 ベクトル
         * @param {phina.geom.Vector2} v2 ベクトル
         * @param {Number} t 媒介変数
         * @return {phina.geom.Vector2} 線形補間の結果
         */
        static lerp(a: Vector2, b: Vector2, t: number): Vector2;

        /**
         * @method slerp
         * @static
         * 補間（未実装）
         */
        static slerp(lhs: Vector2, rhs: Vector2, t: number): Vector2;

        /**
         * @method random
         * @static
         * 角度が min から max の範囲（度単位）で大きさが len のランダムなベクトルを生成して返します。
         *
         * ### Example
         *     phina.geom.Vector2.random(90, 180, 1); // => phina.geom.Vector2(-0.5, 0.866) など
         *
         * @param {Number} [min=0] 角度（度単位）の下限値
         * @param {Number} [max=360] 角度（度単位）の上限値
         * @param {Number} [len=1] 大きさ
         * @return {phina.geom.Vector2} 生成したベクトル
         */
        static random(min?: number, max?: number, len?: number): Vector2;

        /**
         * @property {phina.geom.Vector2} ZERO ゼロベクトル
         * @readonly
         */
        static readonly ZERO: Vector2;
        /**
         * @property {phina.geom.Vector2} LEFT 左方向の単位ベクトル
         * @readonly
         */
        static readonly LEFT: Vector2;
        /**
         * @property {phina.geom.Vector2} RIGHT 右方向の単位ベクトル
         * @readonly
         */
        static readonly RIGHT: Vector2;
        /**
         * @property {phina.geom.Vector2} UP 上方向の単位ベクトル
         * @readonly
         */
        static readonly UP: Vector2;
        /**
         * @property {phina.geom.Vector2} DOWN 下方向の単位ベクトル
         * @readonly
         */
        static readonly DOWN: Vector2;

    }
}
// #endregion phina.geom.Vector2
//=============================================================
// #region phina.geom.Vector3
declare module phina.geom {
    /**
     * @class phina.geom.Vector3
     * # 3次元ベクトルクラス（未実装）
     * 3次元のベクトルや座標を表すクラスです。
     */
    export class Vector3 {
        /** x座標 */
        x: number;
        /** y座標 */
        y: number;
        /** z座標 */
        z: number;

        /**
         * @constructor
         */
        constructor(x: number, y: number, z: number);
    }
}
// #endregion phina.geom.Vector3
//=============================================================
// #region phina.geom.Matrix33
declare module phina.geom {
    /**
     * @class phina.geom.Matrix33
     * # 行列クラス
     * 3x3の行列を表すクラスです。
     * 
     * <pre>
     * | m00 m01 m02 |
     * | m10 m11 m12 |
     * | m20 m21 m22 |
     * </pre>
     */
    export class Matrix33 {
        /**
         * @method init
         * マトリックスクラスのコンストラクタです。
         *
         * 引数は m00, m01, m02, m10, m11, m12, m20, m21, m22 の順に指定します。
         * 引数が9個に満たない場合は単位行列を生成します。
         *
         * ### Example
         *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
         *     mat2 = phina.geom.Matrix33();
         *     mat1.m00 + mat2.m00; // => 2
         *     mat1.m01 - mat2.m01; // => 2
         *
         * @param {Number...} m00, m01,... 各要素の値
         * @return {phina.geom.Matrix33} 行列オブジェクト
         */
        constructor(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number);
        constructor();

        /**
         * @method set
         * @chainable
         * this の各要素の値を再設定します。
         *
         * ### Example
         *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
         *     mat2 = phina.geom.Matrix33();
         *     mat2.set(1, 2, 3, 4, 5, 6, 7, 8, 9);
         *     mat1.toString() == mat2.toString(); // => true
         *
         * @param {Number...} m00, m01,... 各要素の値
         * @return {phina.geom.Matrix33} 行列オブジェクト
         */
        set(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): this;

        /**
         * @method identity
         * @chainable
         * this を単位行列にします。
         *
         * ### Example
         *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
         *     mat2 = phina.geom.Matrix33();
         *     mat1.identity().toString() == mat2.toString(); // => true
         *
         * @return {phina.geom.Matrix33} 単位行列
         */
        identity(): this;

        /**
         * @method clone
         * this のコピーを生成して返します。
         *
         * ### Example
         *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
         *     mat2 = mat1.clone();
         *     mat1.toString() == mat2.toString(); // => true
         *     mat1 == mat2; // => false
         *
         * @return {phina.geom.Matrix33} 行列オブジェクト
         */
        clone(): Matrix33;

        /**
         * @method determinant
         * 行列式を返します
         *
         * ### Example
         *     mat1 = phina.geom.Matrix33(0, -2, 0, -1, 3, 1, 4, 2, 1);
         *     mat1.determinant(); // => -10
         *     mat1.identity().determinant(); // => 1
         *
         * @return {Number} 行列式
         */
        determinant(): number;

        /**
         * @method transpose
         * @chainable
         * 転置行列を返します。
         *
         * ### Example
         *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
         *     mat2 = phina.geom.Matrix33(1, 4, 7, 2, 5, 8, 3, 6, 9);
         *     mat1.transpose().toString() == mat2.toString(); // => true
         *
         * @return {phina.geom.Matrix33} 転置行列
         */
        transpose(): this;

        /**
         * @method invert
         * @chainable
         * 逆行列を返します。
         *
         * ### Example
         *     mat1 = phina.geom.Matrix33(0, -1, 1, -1, 4, -2, 1, 1, 1);
         *     mat2 = mat1.clone().invert();
         *     mat3 = mat1.clone().multiply(mat2);
         *     mat3.toString() == phina.geom.Matrix33.IDENTITY.toString(); // => true
         *
         * @return {phina.geom.Matrix33} 逆行列
         */
        invert(): this;

        /**
         * @method multiply
         * this に other を乗じます。
         *
         * ### Example
         *     mat1 = phina.geom.Matrix33(0, -1, 1, -1, 4, -2, 1, 1, 1);
         *     mat2 = mat1.clone().invert();
         *     mat3 = mat1.clone().multiply(mat2);
         *     mat3.toString() == phina.geom.Matrix33.IDENTITY.toString(); // => true
         *
         * @param {phina.geom.Matrix33} other 乗じる行列
         * @return {phina.geom.Matrix33} 乗算結果の行列
         */
        multiply(mat: Matrix33): this;

        /**
         * @method multiplyVector2
         * this に2次元ベクトル v を乗じます。
         * 2次元ベクトルは (x, y, 1) として乗算します。
         *
         * ### Example
         *     mat = phina.geom.Matrix33(0, -1, 1, -1, 4, -2, 1, 1, 1);
         *     v = phina.geom.Vector2(2, 4)
         *     mat.multiplyVector2(v) // => {x: -3, y: 12}
         *
         * @param {phina.geom.Vector2} v 乗じるベクトル
         * @return {phina.geom.Vector2} 乗算結果のベクトル
         */
        multiplyVector2(v: Vector2): this;

        /**
         * @method getRow
         * row 番目の行を配列で返します。row が 0、1、2 のいずれかでなければ null を返します。
         *
         * ### Example
         *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
         *     mat1.getRow(0); // [1, 2, 3]
         *     mat1.getRow(1); // [4, 5, 6]
         *     mat1.getRow(9); // null
         *
         * @param {0/1/2} row 行番号
         * @return {Number[]} 行を表す配列
         */
        getRow(row: 0 | 1 | 2): number[];

        /**
         * @method getCol
         * col 番目の列を配列で返します。col が 0、1、2 のいずれかでなければ null を返します。
         *
         * ### Example
         *     mat1 = phina.geom.Matrix33(1, 2, 3, 4, 5, 6, 7, 8, 9);
         *     mat1.getCol(0); // [1, 4, 7]
         *     mat1.getCol(1); // [2, 5, 8]
         *     mat1.getRow(-1); // null
         *
         * @param {0/1/2} col 列番号
         * @return {Number[]} 列を表す配列
         */
        getCol(col: 0 | 1 | 2): number[];

        /**
         * @method toString
         * 行列を JSON 形式で表現した文字列を返します。
         *
         * ### Example
         *     v = phina.geom.Vector2(3, 4);
         *     v2 = v.clone();
         *     v2.x == v.x; // => true
         *
         * @return {String} JSON 文字列
         */
        toString(): string;

        /**
         * @property {phina.geom.Matrix33} IDENTITY 単位行列
         * @readonly
         */
        static readonly IDENTITY: Matrix33;
    }
}
// #endregion phina.geom.Matrix33
//=============================================================
// #region phina.geom.Rect
declare module phina.geom {
    /**
     * @class phina.geom.Rect
     * # 矩形領域を表すクラス
     * キャンバス上の矩形領域を扱うクラスです。
     * 
     */
    export class Rect {

        /**
         * @property {Number} x
         * 矩形の左上頂点の x 座標
         */
        x: number;
        /**
         * @property {Number} y
         * 矩形の左上頂点の y 座標
         */
        y: number;
        /**
         * @property {Number} width
         * 矩形の幅
         */
        width: number;
        /**
         * @property {Number} hight
         * 矩形の高さ
         */
        height: number;

        /**
         * @method init
         * 矩形領域のコンストラクタです。
         *
         * ### Example
         *     rect = phina.geom.Rect(8, 16, 32, 64);
         *
         * @param {Number} x 矩形の左上頂点の x 座標
         * @param {Number} y 矩形の左上頂点の y 座標
         * @param {Number} width 幅
         * @param {Number} height 高さ
         * @return {phina.geom.Rect} 矩形領域オブジェクト
         */
        constructor(x: number, y: number, width: number, height: number);

        /**
         * @method set
         * @chainable
         * this の各値を再設定します。
         *
         * ### Example
         *     rect = phina.geom.Rect(8, 16, 32, 64);
         *     rect.set(0, 16, 32, 64);
         *
         * @param {Number} x 矩形の左上頂点の x 座標
         * @param {Number} y 矩形の左上頂点の y 座標
         * @param {Number} width 幅
         * @param {Number} height 高さ
         */
        set(x: number, y: number, width: number, height: number): this;

        /**
         * @method moveTo
         * @chainable
         * 矩形領域を座標 (x, y) に移動します。
         *
         * ### Example
         *     rect = phina.geom.Rect(8, 16, 32, 64);
         *     rect.centerX; // => 24
         *     rect.moveTo(0, 0);
         *     rect.centerX; // => 16
         *
         * @param {Number} x 移動先の x 座標
         * @param {Number} y 移動先の y 座標
         */
        moveTo(x: number, y: number): this;

        /**
         * @method moveBy
         * @chainable
         * 矩形領域を (x, y) だけ移動します。
         *
         * ### Example
         *     rect = phina.geom.Rect(8, 16, 32, 64);
         *     rect.moveBy(10, -10);
         *     rect.x; // => 18
         *     rect.y; // => 6
         *
         * @param {Number} x 移動量の x 座標
         * @param {Number} y 移動量の y 座標
         */
        moveBy(x: number, y: number): this;

        /**
         * @method setSizse
         * @chainable
         * 矩形領域の幅と高さを変更します。
         *
         * ### Example
         *     rect = phina.geom.Rect(8, 16, 32, 64);
         *     rect.setSize(10, 20);
         *     rect.width; // => 10
         *     rect.height; // => 20
         *
         * @param {Number} width 幅
         * @param {Number} height 高さ
         */
        setSize(w: number, h: number): this;

        /**
         * @method padding
         * @chainable
         * 矩形領域の中にパディング領域を設定します。
         *
         * 矩形領域自体のサイズはパディング領域の分だけ小さくなります。  
         * 幅の指定方法は CSS の padding 指定と同じように時計回りです。  
         * 引数が1つの場合は上下左右の値、引数が2つの場合は上下と左右の値、引数が３つの場合は上、左右、下の値と解釈します。
         *
         * ### Example
         *     rect = phina.geom.Rect(50, 100, 150, 200);
         *     rect.padding(10);
         *     rect.x; // => 60
         *     rect.y; // => 110
         *     rect.width; // => 130
         *     rect.height; // => 180
         *
         * @param {Number} top 上辺のパディング幅
         * @param {Number} right 右辺のパディング幅
         * @param {Number} bottom 下辺のパディング幅
         * @param {Number} left 左辺のパディング幅
         */
        padding(top: number, right: number, bottom: number, left: number): this;

        /**
         * @method contains
         * 座標 (x, y) が 矩形領域の中に含まれるかどうかを返します。
         *
         * ### Example
         *     rect = phina.geom.Rect(50, 100, 150, 200);
         *     rect.contains(35, 68); // =>  true
         *     rect.contains(200, 68); // => false
         *
         * @param {Number} x 判定する対象の x 座標
         * @param {Number} y 判定する対象の y 座標
         * @return {Boolean} 指定した座標が矩形領域の中に含まれるかどうか
         */
        contains(x: number, y: number): boolean;

        /**
         * @method clone
         * this のコピーを生成して返します。
         *
         * ### Example
         *     rect = phina.geom.Rect(50, 100, 150, 200);
         *     rect2 = rect.clone();
         *     rect2.x == rect.x; // => true
         *
         * @return Object 生成した矩形領域
         */
        clone(): Rect;

        /**
         * @method toCircle
         * 矩形領域内に収まる最大の円領域を生成して返します。
         *
         * ### Example
         *     rect = phina.geom.Rect(32, 64, 100, 200);
         *     circle = rect.toCircle();
         *     circle.x; // => 82
         *     circle.y; // => 164
         *     circle.radius; // => 50
         *
         * @return Object 生成した円領域
         */
        toCircle(): Circle;

        /**
         * @method toArray
         * this の各値を要素とする配列を生成して返します。
         *
         * ### Example
         *     rect = phina.geom.Rect(32, 64, 100, 200);
         *     rect.toArray(); // => [32, 64, 100, 200]
         *
         * @return {Number[]} 生成した配列
         */
        toArray(): number[];

        /**
         * @property {Number} left
         * キャンバス左端から矩形領域の左辺までの距離
         *
         * left を変更すると矩形領域の幅（width）が自動的に調整されます。
         *
         * ### Example
         *     rect = phina.geom.Rect(32, 64, 100, 200);
         *     rect.left; // => 32
         *     rect.width; // => 100
         *     rect.right; // => 132
         *     
         *     rect.left = 42;
         *     rect.width; // => 90
         */
        left: number;
        /**
         * @property {Number} top
         * キャンバス上端から矩形領域の上辺までの位置
         *
         * top を変更すると矩形領域の高さ（height）が自動的に調整されます。
         */
        top: number;
        /**
         * @property {Number} right
         * キャンバス左端から矩形領域の右辺までの距離
         *
         * right を変更すると矩形領域の幅（width）が自動的に調整されます。
         */
        right: number;
        /**
         * @property {Number} bottom
         * キャンバス上端から矩形領域の下辺までの位置
         *
         * bottom を変更すると矩形領域の高さ（height）が自動的に調整されます。
         */
        bottom: number;

        /**
         * @property {Number} centerX
         * 矩形領域の x 座標
         *
         * 現時点では読み取り専用です。
         */
        readonly centerX: number;
        /**
         * @property {Number} centerY
         * 矩形領域の y 座標
         *
         * 現時点では読み取り専用です。
         */
        readonly centerY: number;
    }
}
// #endregion phina.geom.Rect
//=============================================================
// #region phina.geom.Circle
declare module phina.geom {
    /**
     * @class phina.geom.Circle
     * # 円領域を表すクラス
     * キャンバス上の円領域を扱うクラスです。
     * 
     */
    export class Circle {
        /**
         * @property {Number} x
         * 円の中心の x 座標
         */
        x: number;
        /**
         * @property {Number} y
         * 円の中心の y 座標
         */
        y: number;
        /**
         * @property {Number} radius
         * 円の半径
         */
        radius: number;

        /**
         * @method init
         * 円領域のコンストラクタです。
         *
         * ### Example
         *     circle = phina.geom.Circle(32, 64, 128);
         *
         * @param {Number} x 円の中心の x 座標
         * @param {Number} y 円の中心の y 座標
         * @param {Number} radius 半径
         * @return {phina.geom.Rect} 円領域オブジェクト
         */
        constructor(x: number, y: number, radius: number);

        /**
         * @method set
         * @chainable
         * this の各値を再設定します。
         *
         * ### Example
         *     circle = phina.geom.Circle(32, 64, 128);
         *     circle.set(100, 200, 32);
         *
         * @param {Number} x 円を囲う矩形の左上頂点の x 座標
         * @param {Number} y 円を囲う矩形の左上頂点の x 座標
         * @param {Number} radius 半径
         * @return {phina.geom.Circle} 円領域オブジェクト
         */
        set(x: number, y: number, radius: number): this;

        /**
         * @method moveTo
         * @chainable
         * 円領域を座標 (x, y) に移動します。(x, y) は円の中心を表します。
         *
         * ### Example
         *     circle = phina.geom.Circle(300, 300, 40);
         *     circle.left; // => 260
         *     circle.moveTo(100, 100);
         *     circle.left; // => 60
         *
         * @param {Number} x 移動先の x 座標
         * @param {Number} y 移動先の y 座標
         */
        moveTo(x: number, y: number): this;

        /**
         * @method moveBy
         * @chainable
         * 円領域を (x, y) だけ移動します。
         *
         * ### Example
         *     circle = phina.geom.Circle(300, 300, 40);
         *     circle.left; // => 260
         *     circle.moveBy(100, 100);
         *     circle.left; // => 460
         *
         * @param {Number} x 移動量の x 座標
         * @param {Number} y 移動量の y 座標
         */
        moveBy(x: number, y: number): this;

        /**
         * @method contains
         * 座標 (x, y) が円領域の中に含まれるかどうかを返します。
         *
         * ### Example
         *     circle = phina.geom.Circle(300, 300, 100);
         *     circle.contains(350, 350); // =>  true
         *     circle.contains(350, 400); // => false
         *
         * @param {Number} x 判定する対象の x 座標
         * @param {Number} y 判定する対象の y 座標
         * @return {Boolean} 指定した座標が円領域の中に含まれるかどうか
         */
        contains(x: number, y: number): boolean;

        /**
         * @method clone
         * this のコピーを生成して返します。
         *
         * ### Example
         *     circle = phina.geom.Circle(50, 100, 40);
         *     circle2 = circle.clone();
         *     circle2.x == circle.x; // => true
         *
         * @return Object 生成した円領域
         */
        clone(): Circle;

        /**
         * @method toRect
         * 円に外接する正方形を表す矩形領域を生成して返します。
         *
         * ### Example
         *     circle = phina.geom.Circle(50, 100, 40);
         *     rect = circle.toRect();
         *     rect.x; // => 10
         *     rect.y; // => 60
         *     rect.width; // => 80
         *
         * @return Object 生成した矩形領域
         */
        toRect(): Rect;
        /**
         * @method toArray
         * this の各値を要素とする配列を生成して返します。
         *
         * ### Example
         *     circle = phina.geom.Circle(50, 100, 40);
         *     rect.toArray(); // => [50, 100, 40]
         *
         * @return {Number[]} 生成した配列
         */
        toArray(): number[];

        /**
         * @property {Number} left
         * @readonly
         * キャンバス左端から円の左端までの距離
         *
         * 現時点では読み取り専用です。
         *
         * ### Example
         *     circle = phina.geom.Circle(200, 300, 100);
         *     circle.left; // => 100
         *     circle.top; // => 200
         *     circle.right; // => 300
         *     circle.bottom; // => 400
         */
        readonly left: number;
        /**
         * @property {Number} top
         * @readonly
         * キャンバス上端から円の上端までの距離
         *
         * 現時点では読み取り専用です。
         */
        readonly top: number;
        /**
         * @property {Number} right
         * @readonly
         * キャンバス右端から円の右端までの距離
         *
         * 現時点では読み取り専用です。
         */
        readonly right: number;
        /**
         * @property {Number} bottom
         * @readonly
         * キャンバス下端から円の下端までの距離
         *
         * 現時点では読み取り専用です。
         */
        readonly bottom: number;
        /**
         * @property {Number} size
         * @readonly
         * 円の直径
         *
         * 現時点では読み取り専用です。
         */
        readonly size: number;
    }
}
// #endregion phina.geom.Circle
//=============================================================
// #region phina.geom.Collision
declare module phina.geom {
    /**
     * @class phina.geom.Collision
     * # 衝突判定用クラス
     * 衝突判定のためのクラスです。すべてのメソッドがスタティックメソッドです。
     * 
     */
    export namespace Collision {

        /**
         * @method testCircleCircle
         * @static
         * 2つの円領域が重なっているかどうかを判定します
         *
         * ### Example
         *     circle1 = phina.geom.Circle(100, 100, 30);
         *     circle2 = phina.geom.Circle(130, 140, 30);
         * phina.geom.Collision.testCircleCircle(circle1, circle2); // => true
         *
         * @param {phina.geom.Circle} circle1 円領域オブジェクト
         * @param {phina.geom.Circle} circle2 円領域オブジェクト
         * @return {Boolean} 領域が重なっているかどうか
         */
        function testCircleCircle(circle0: Circle, circle1: Circle): boolean;
        /**
         * @method testRectRect
         * @static
         * 2つの矩形領域が重なっているかどうかを判定します
         *
         * ### Example
         *     rect1 = phina.geom.Rect(100, 100, 30, 40);
         *     rect2 = phina.geom.Rect(200, 200, 10, 10);
         *     phina.geom.Collision.testRectRect(rect1, rect2); // => false
         *
         * @param {phina.geom.Rect} rect1 矩形領域オブジェクト
         * @param {phina.geom.Rect} rect2 矩形領域オブジェクト
         * @return {Boolean} 領域が重なっているかどうか
         */
        function testRectRect(rect0: Rect, rect1: Rect): boolean;
        /**
         * @method testCircleRect
         * @static
         * 円領域と矩形領域が重なっているかどうかかを判定します
         *
         * ### Example
         *     circle = phina.geom.Circle(100, 100, 30);
         *     rect = phina.geom.Rect(100, 100, 30, 40);
         *     phina.geom.Collision.testCircleRect(circle, rect); // => true
         *
         * @param {phina.geom.Circle} circle 円領域オブジェクト
         * @param {phina.geom.Rect} rect 矩形領域オブジェクト
         * @return {Boolean} 領域が重なっているかどうか
         */
        function testCircleRect(circle: Circle, rect: Rect): boolean;
        /**
         * @method testCircleLine
         * @static
         * 円領域と線分が重なっているかどうかを判定します
         *
         * ### Example
         *     circle = phina.geom.Circle(100, 100, 20);
         *     p1 = phina.geom.Vector2(0, 0);
         *     p2 = phina.geom.Vector2(300, 400);
         *     phina.geom.Collision.testCircleLine(circle, p1, p2); // => true
         *
         * @param {phina.geom.Circle} circle 円領域オブジェクト
         * @param {phina.geom.Vector2} p1 線分の端の座標
         * @param {phina.geom.Vector2} p2 線分の端の座標
         * @return {Boolean} 円領域と線分が重なっているかどうか
         */
        function testCircleLine(circle: Circle, p1: Vector2, p2: Vector2): boolean;
        /**
         * @method testLineLine
         * @static
         * 2つの線分が重なっているかどうかを判定します
         * 参考：http://www5d.biglobe.ne.jp/~tomoya03/shtml/algorithm/Intersection.htm
         *
         * ### Example
         *     p1 = phina.geom.Vector2(100, 100);
         *     p2 = phina.geom.Vector2(200, 200);
         *     p3 = phina.geom.Vector2(150, 240);
         *     p4 = phina.geom.Vector2(200, 100);
         * phina.geom.Collision.testLineLine(p1, p2, p3, p4); // => true
         *
         * @param {phina.geom.Vector2} p1 線分1の端の座標
         * @param {phina.geom.Vector2} p2 線分1の端の座標
         * @param {phina.geom.Vector2} p3 線分2の端の座標
         * @param {phina.geom.Vector2} p4 線分2の端の座標
         * @return {Boolean} 線分1と線分2が重なっているかどうか
         */
        function testLineLine(p1: Vector2, p2: Vector2, p3: Vector2, p4: Vector2): boolean;
        /**
         * @method testRectLine
         * @static
         * 矩形と線分が重なっているかどうかを判定します
         *
         * ### Example
         *     rect = phina.geom.Rect(120, 130, 40, 50);
         *     p1 = phina.geom.Vector2(100, 100);
         *     p2 = phina.geom.Vector2(200, 200);
         * phina.geom.Collision.testRectLine(rect, p1, p2); // => true
         *
         * @param {phina.geom.Rect} rect 矩形領域オブジェクト
         * @param {phina.geom.Vector2} p1 線分の端の座標
         * @param {phina.geom.Vector2} p2 線分の端の座標
         * @return {Boolean} 矩形と線分が重なっているかどうか
         */
        function testRectLine(rect: Rect, p1: Vector2, p2: Vector2): boolean;
    }
}
// #endregion phina.geom.Collision
// #endregion phina.geom
//=============================================================
// #region phina.util
// #region phina.util.Support
declare module phina.util {
    /**
     * @class phina.util.Support
     * 
     */
    export class Support {
        static readonly canvas: any;
        static webGL(): any;
        static readonly webAudio: any;
    }
}
// #endregion phina.util.Support
//=============================================================
// #region phina.util.EventDispatcher
declare module phina.util {
    /**
     * @class phina.util.EventDispatcher
     * # イベントを扱うためのクラス
     * イベントを扱うためのメソッドやプロパティを定義しているクラスです。
     * phina.js が提供するクラスの多くはこの EventDispatcher クラスの子孫となっているため、
     * ほとんどのオブジェクトで容易にイベントを扱うことができます。
     *
     * # 少し説明
     * this.onxxx = function(){}; でもイベントリスナを設定できるが、あまり推奨しない。
     * 呼び出される順序は、まず this.onxxxx が呼び出され、あとは on() で登録した順番。
     */
    export class EventDispatcher {
        constructor();
        /**
         * @method on
         * @chainable
         * イベントリスナを登録します。
         *
         * １つのイベントに対するイベントリスナはいくつでも登録することができます。
         *
         * 標準のイベントを検知するには、オブジェクトの {@link Object2D#interactive} プロパティが true である必要があります。
         * {@link Object2D#interactive} プロパティを設定するには {@link Object2D#setInteractive} メソッドを呼び出してください。
         *
         * また、{@link #flare} や {@link #fire} によって定義したカスタムイベントに対するイベントリスナも登録することが
         * できます。カスタムイベントのイベントリスナは {@link Object2D#interactive} プロパティによらず呼び出されます。
         * なおカスタムイベントのオブジェクトは Event オブジェクトとは異なります。
         *
         * ###Reference
         * 標準のイベントの種類は以下を参照してください。  
         * - [Event reference | MDN]( https://developer.mozilla.org/en-US/docs/Web/Events )
         *
         * ### Example
         *     var shape = CircleShape().addChildTo(this).setInteractive(true).setPosition(50, 50);
         *     shape.on("touchstart", function(e){
         *       this.color = "blue";
         *     });
         *
         * @param {String} type イベントの種類
         * @param {Function} listener イベントリスナとなる関数
         * @param Object listener.event Event オブジェクト、またはカスタムイベントのオブジェクト
         */
        on(type: string, listener: Function): this;

        /**
         * @method off
         * @chainable
         * イベントリスナを削除します。
         *
         * ある種類のイベントに対するイベントリスナをすべて削除するには {@link #clear} を使用してください。
         *
         * @param {String} type イベントの種類
         * @param {Function} listener イベントリスナ関数
         */
        off(type: string, listener: Function): this;

        /**
         * @method fire
         * @chainable
         * カスタムイベントを表すオブジェクトを指定してカスタムイベントを発火します。
         *
         * @param Object event カスタムイベントを表すオブジェクト
         * @param {String} event.type カスタムイベントの名前
         */
        fire(e: { type: string } | {}): this;

        /**
         * @method flare
         * @chainable
         * イベント名を指定してカスタムイベントを発火します。
         *
         * param 引数を指定することによりカスタムイベントに任意のプロパティを設定することができます。  
         * これにより、呼び出し元がイベントリスナに任意の値を渡すことができます。  
         * （ただし target プロパティには必ず自分自身が格納されます。）
         *
         * ### Example
         *     //
         *
         * @param {String} type カスタムイベントの名前
         * @param Object [param] カスタムイベントにプロパティを設定するためのオブジェクト
        */
        flare(type: string, param: {}): this;

        /**
         * @method one
         * @chainable
         * 一度だけ実行されるイベントリスナを登録します。
         *
         * 指定したイベントリスナが一度実行されると、そのイベントリスナは削除されます。それ以外の挙動は {@link #on} と同じです。
         *
         * @param {String} type イベントの種類
         * @param {Function} listener イベントリスナとなる関数
         * @param Object listener.event Event オブジェクト、またはカスタムイベントのオブジェクト
         */
        one(type: string, listener: Function): this;

        /**
         * @method has
         * イベントリスナが登録されているかどうかを調べます。
         *
         * 指定したイベントの種類に対するイベントリスナが登録されている場合は true、そうでない場合は false を返します。
         *
         * @param {String} type イベントの種類
         * @return {Boolean} 指定したイベントのイベントリスナが登録されているかどうか
         */
        has(type: string): boolean;

        /**
         * @method clear
         * @chainable
         * ある種類のイベントに対するイベントリスナをすべて削除します。
         *
         * 特定のイベントリスナのみを削除するには {@link #off} を使用してください。
         *
         * @param {String} type イベントの種類
         */
        clear(type: string): this;

        /**
         * @method addEventListener
         * {@link #on} のエイリアスです。
         */
        addEventListener(type: string, listener: Function): this;
        /**
         * @method removeEventListener
         * {@link #off} のエイリアスです。
         */
        removeEventListener(type: string, listener: Function): this;
        /**
         * @method clearEventListener
         * {@link #clear} のエイリアスです。
         */
        clearEventListener(type: string): this;
        /**
         * @method hasEventListener
         * {@link #has} のエイリアスです。
         */
        hasEventListener(type: string): boolean;
        /**
         * @method dispatchEvent
         * {@link #fire} のエイリアスです。
         */
        dispatchEvent(e: { type: string } | {}): this;
        /**
         * @method dispatchEventByType
         * {@link #flare} のエイリアスです。
         */
        dispatchEventByType(type: string, param: {}): this;
    }
}
// #endregion phina.util.EventDispatcher
//=============================================================
// #region phina.util.Tween
declare module phina.util {
    /**
     * @class phina.util.Tween
     * @extends phina.util.EventDispatcher
     * 
     */
    export class Tween extends EventDispatcher {

        time: number;
        target?: {};
        beginProps?: {};
        finishProps?: {};
        changeProps?: {};
        duration?: {};
        easing?: Tween.EASING_FUNCTION;

        /**
         * @constructor
         */
        constructor(target?: any);

        fromTo(target: {}, beginProps: {}, finishProps: {}, duration: number | null, easing: Tween.EASING_FUNCTION): this;
        to(target: {}, finishProps: {}, duration: number | null, easing: Tween.EASING_FUNCTION): this;
        from(target: {}, beginProps: {}, duration: number | null, easing: Tween.EASING_FUNCTION): this;
        by(target: {}, props: {}, duration: number | null, easing: Tween.EASING_FUNCTION): this;
        yoyo(): this;
        gain(time: number): void;
        forward(time: number): void;
        backward(time: number): void;
        seek(time: number): this;

        static readonly EASING: {
            /** default */
            default: Tween.EASING_FUNCTION;
            /** linear */
            linear: Tween.EASING_FUNCTION;
            /** swing */
            swing: Tween.EASING_FUNCTION;
            /** easeInQuad */
            easeInQuad: Tween.EASING_FUNCTION;
            /** easeOutQuad */
            easeOutQuad: Tween.EASING_FUNCTION;
            /** easeInOutQuad */
            easeInOutQuad: Tween.EASING_FUNCTION;
            /** defeInCubic */
            defeInCubic: Tween.EASING_FUNCTION;
            /** easeOutCubic */
            easeOutCubic: Tween.EASING_FUNCTION;
            /** easeInOutCubic */
            easeInOutCubic: Tween.EASING_FUNCTION;
            /** easeOutInCubic */
            easeOutInCubic: Tween.EASING_FUNCTION;
            /** easeInQuart */
            easeInQuart: Tween.EASING_FUNCTION;
            /** easeOutQuart */
            easeOutQuart: Tween.EASING_FUNCTION;
            /** easeInOutQuart */
            easeInOutQuart: Tween.EASING_FUNCTION;
            /** easeOutInQuart */
            easeOutInQuart: Tween.EASING_FUNCTION;
            /** easeInQuint */
            easeInQuint: Tween.EASING_FUNCTION;
            /** easeOutQuint */
            easeOutQuint: Tween.EASING_FUNCTION;
            /** easeInOutQuint */
            easeInOutQuint: Tween.EASING_FUNCTION;
            /** easeOutInQuint */
            easeOutInQuint: Tween.EASING_FUNCTION;
            /** easeInSine */
            easeInSine: Tween.EASING_FUNCTION;
            /** easeOutSine */
            easeOutSine: Tween.EASING_FUNCTION;
            /** easeInOutSine */
            easeInOutSine: Tween.EASING_FUNCTION;
            /** easeOutInSine */
            easeOutInSine: Tween.EASING_FUNCTION;
            /** easeInExpo */
            easeInExpo: Tween.EASING_FUNCTION;
            /** easeOutExpo */
            easeOutExpo: Tween.EASING_FUNCTION;
            /** easeInOutExpo */
            easeInOutExpo: Tween.EASING_FUNCTION;
            /** easeOutInExpo */
            easeOutInExpo: Tween.EASING_FUNCTION;
            /** easeInCirc */
            easeInCirc: Tween.EASING_FUNCTION;
            /** easeOutCirc */
            easeOutCirc: Tween.EASING_FUNCTION;
            /** easeInOutCirc */
            easeInOutCirc: Tween.EASING_FUNCTION;
            /** easeOutInCirc */
            easeOutInCirc: Tween.EASING_FUNCTION;
            /** easeInElastic */
            easeInElastic: Tween.EASING_FUNCTION;
            /** easeOutElastic */
            easeOutElastic: Tween.EASING_FUNCTION;
            /** easeInOutElastic */
            easeInOutElastic: Tween.EASING_FUNCTION;
            /** easeOutInElastic */
            easeOutInElastic: Tween.EASING_FUNCTION;
            /** easeInBack */
            easeInBack: Tween.EASING_FUNCTION;
            /** easeOutBack */
            easeOutBack: Tween.EASING_FUNCTION;
            /** easeInOutBack */
            easeInOutBack: Tween.EASING_FUNCTION;
            /** easeOutInBack */
            easeOutInBack: Tween.EASING_FUNCTION;
            /** easeInBounce */
            easeInBounce: Tween.EASING_FUNCTION;
            /** easeOutBounce */
            easeOutBounce: Tween.EASING_FUNCTION;
            /** easeInOutBounce */
            easeInOutBounce: Tween.EASING_FUNCTION;
            /** easeOutInBounce */
            easeOutInBounce: Tween.EASING_FUNCTION;
        };
    }
    export namespace Tween {
        type EASING_FUNCTION = (t: number, b: number, c: number, d: number) => number;
    }
}
// #endregion phina.util.Tween
//=============================================================
// #region phina.util.Ticker
declare module phina.util {
    /**
     * @class phina.util.Ticker
     * tick management class
     * @extends phina.util.EventDispatcher
     */
    export class Ticker extends EventDispatcher {
        /** 経過フレーム数 */
        frame: number;
        /** 1フレームの経過時間 */
        deltaTime: number;
        /** 全体の経過時間 */
        elapsedTime: number;

        fps: number;

        startTime?: number;
        currentTime?: number;
        frameTime?: number;

        /**
         * @constructor
         */
        constructor();

        tick(func: Function): void;
        run(): number;
        start(): this;

        // TODO:
        resume(): void;
        stop(): void;
        rewind(): void;

        static runner(run: Function, delay: number): void;

        runner: typeof Ticker.runner;

    }
}
// #endregion phina.util.Ticker
//=============================================================
// #region phina.util.Grid
declare module phina.util {
    /**
     * @class phina.util.Grid
     * tick management class
     */
    export class Grid extends EventDispatcher {
        /** 幅 */
        width: number;
        /** 列数 */
        columns: number;
        /** ループ */
        loop: boolean;
        /** オフセット値 */
        offset: number;

        unitWidth: number;

        /**
         * @constructor
         */
        constructor();

        // スパン指定で値を取得(負数もok)
        span(index: number): number;

        //
        unit(): number;

        center(offset?: number): number;
    }
}
// #endregion phina.util.Grid
//=============================================================
// #region phina.util.ChangeDispatcher
declare module phina.util {
    /**
     * @class phina.util.ChangeDispatcher
     * @extends phina.util.EventDispatcher
     * 監視オブジェクト
     * register で key を登録 (デフォルト値も一緒に？)
     * event dispatcher を継承
     * event dispatcher って util じゃね？
     * register で登録した値を変更したら change イベントが走る
     *
     * 名前候補
     *  middleman(仲立人)
     */
    export class ChangeDispatcher extends EventDispatcher {
        [key: string]: any;

        constructor();

        register(key: string, defaultValue: any): this;

        observe(): void;
        unobserve(): void;

    }
}
// #endregion phina.util.ChangeDispatcher
//=============================================================
// #region phina.util.Flow
declare module phina.util {
    /**
     * @class phina.util.Flow
     * tick management class
     * @extends phina.util.EventDispatcher
     */
    export class Flow extends EventDispatcher {
        status: string;
        resultValue: any | null;
        func: Function;

        /**
         * @constructor
         */
        constructor(func: Function, wait?: boolean);

        /*
         * 成功
         */
        resolve(arg: any): void;

        /*
         * 失敗
         */
        reject(): void;

        /*
         * 非同期終了時の処理を登録
         */
        then(func: Function): Flow | undefined;

        static resolve(value: Flow | any): Flow;
        static all(flows: Flow[]): Flow;
    }
}
// #endregion phina.util.Flow
//=============================================================
// #region phina.util.Color
declare module phina.util {
    /**
     * @class phina.util.Color
     * カラークラス
     */
    export class Color {
        /** R値 */
        r: number;
        /** G値 */
        g: number;
        /** B値 */
        b: number;
        /** A値 */
        a: number;

        /**
         * 初期化
         */
        constructor(r: number, g: number, b: number, a?: number);

        /**
         * セッター.
         */
        set(r: number, g: number, b: number, a?: number): this;

        /**
         * 数値によるセッター.
         */
        setFromNumber(r: number, g: number, b: number, a?: number): this;

        /**
         * 配列によるセッター
         */
        setFromArray(arr: number[]): this;

        /**
         * オブジェクトによるセッター
         */
        setFromObject(obj: { r: number, g: number, b: number, a?: number }): this;

        /**
         * 文字列によるセッター
         */
        setFromString(str: string): this;

        /**
         * 賢いセッター
         */
        setSmart(r: number, g: number, b: number, a?: number): this;
        setSmart(arr: number[]): this;
        setSmart(obj: { r: number, g: number, b: number, a?: number }): this;
        setSmart(str: string): this;

        /**
         * CSS 用 16進数文字列に変換
         */
        toStyleAsHex(): string;

        /**
         * CSS 用 RGB文字列に変換
         */
        toStyleAsRGB(): string;

        /**
         * CSS 用 RGBA文字列に変換
         */
        toStyleAsRGBA(): string;

        /**
         * CSS 用 RGBA 文字列に変換
         */
        toStyle(): string;

        /**
         * @static
         * カラーリスト
         */
        static COLOR_LIST: {
            /** @property black */
            "black": [0x00, 0x00, 0x00],
            /** @property silver */
            "silver": [0xc0, 0xc0, 0xc0],
            /** @property gray */
            "gray": [0x80, 0x80, 0x80],
            /** @property white */
            "white": [0xff, 0xff, 0xff],
            /** @property maroon */
            "maroon": [0x80, 0x00, 0x00],
            /** @property red */
            "red": [0xff, 0x00, 0x00],
            /** @property purple */
            "purple": [0x80, 0x00, 0x80],
            /** @property fuchsia */
            "fuchsia": [0xff, 0x00, 0xff],
            /** @property green */
            "green": [0x00, 0x80, 0x00],
            /** @property lime */
            "lime": [0x00, 0xff, 0x00],
            /** @property olive */
            "olive": [0x80, 0x80, 0x00],
            /** @property yellow */
            "yellow": [0xff, 0xff, 0x00],
            /** @property navy */
            "navy": [0x00, 0x00, 0x80],
            /** @property blue */
            "blue": [0x00, 0x00, 0xff],
            /** @property teal */
            "teal": [0x00, 0x80, 0x80],
            /** @property aqua */
            "aqua": [0x00, 0xff, 0xff],
        };

        /**
         * @static
         * @member phina.util.Color
         * @method strToNum
         */
        static strToNum(str: string): number[];
        static stringToNumber(str: string): number[];

        /**
         * @static
         * @method
         * hsl を rgb に変換
         */
        static HSLtoRGB(h: number, s: number, l: number): number[];

        /**
         * @static
         * @method
         * hsla を rgba に変換
         */
        static HSLAtoRGBA(h: number, s: number, l: number, a: number): number[];

        /**
         * @static
         * @method
         * rgb 値を作成
         */
        static createStyleRGB(r: number, g: number, b: number): string;

        /**
         * @static
         * @method
         * rgba 値を作成
         */
        static createStyleRGBA(r: number, g: number, b: number, a: number): string;

        /**
         * @static
         * @method
         * hsl 値を作成
         */
        static createStyleHSL(h: number, s: number, l: number): string;

        /**
         * @static
         * @method
         * hsla 値を作成
         */
        static createStyleHSLA(h: number, s: number, l: number, a: number): string;

    }
}
// #endregion phina.util.Color
//=============================================================
// #region phina.util.Random
declare module phina.util {
    /**
     * @class phina.util.Random
     * ランダムクラス
     */
    export class Random {

        seed: number;

        constructor(seed?: number);

        random(): number;

        randint(min: number, max: number): number;
        randfloat(min: number, max: number): number;
        randbool(): boolean;
        randarray(len: number, min: number, max: number): number[];

        static readonly MAX: number;
        static seed: number;

        static getSeed(): number;
        static setSeed(seed: number): typeof Random;

        static random(): number;

        static randint(min: number, max: number): number;
        static randfloat(min: number, max: number): number;
        static randbool(): boolean;
        static randarray(len: number, min: number, max: number): number[];

        static xor32(seed: number): number;

        /*
         * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
         */
        static uuid(): string;

    }
}
interface Math {
    randint(min: number, max: number): number;
    randfloat(min: number, max: number): number;
}
// #endregion phina.util.Random
//=============================================================
// #region phina.util.QueryString
declare module phina.util {
    /**
     * @class phina.util.QueryString
     * 
     */
    export class QueryString {
        static parse(text?: string, sep?: string, eq?: string, isDecode?: boolean): {};
        static stringify(value: {}, sep?: string, eq?: string, isDecode?: boolean): string;
    }
}
// #endregion phina.util.QueryString
//=============================================================
// #region phina.util.Ajax
declare module phina.util {
    /**
     * @class phina.util.Ajax
     * 
     */
    export class Ajax {
        static request(options: Ajax.OPTIONS): Flow;
        static get(url: string): Flow;
        static post(url: string): Flow;
        static put(url: string): Flow;
        static del(url: string): Flow;
    }
    export namespace Ajax {
        type OPTIONS = {
            /** @default 'GET' */
            type?: string,
            /** @default 'application/x-www-form-urlencoded' ※未使用？ */
            contentType?: string,
            /** @default 'json' */
            responseType?: string,
            /** @default null ※未使用？ */
            data?: string,
            /** @default '' */
            url?: string,
        };
    }
}
// #endregion phina.util.Ajax
// #endregion phina.util
//=============================================================
// #region phina.asset
// #region phina.asset.Asset
declare module phina.asset {
    export type LOAD_SRC = string | {};
    /**
     * @class phina.asset.Asset
     * @extends phina.util.EventDispatcher
     */
    export class Asset extends phina.util.EventDispatcher {

        serverError: boolean;
        notFound: boolean;
        loadError: boolean;

        loaded: boolean;
        src?: LOAD_SRC;

        /**
         * @constructor
         */
        constructor(src?: any);

        load(src: LOAD_SRC): phina.util.Flow;

        isLoaded(): boolean;

        _load(resolve: Function): void;

        // ロード失敗時にダミーをセットする
        loadDummy(): void;

    }
}
// #endregion phina.asset.Asset
//=============================================================
// #region phina.asset.AssetManager
declare module phina.asset {
    /**
     * @class phina.asset.AssetManager
     * 
     */
    export class AssetManager {

        static assets: {
            image: {},
            sound: {},
            spritesheet: {},
            [type: string]: {},
        };

        //        static get(type: string, key: string): phina.asset.Asset;
        static get<T extends phina.asset.Asset>(type: string, key: string): T;
        static set<T extends phina.asset.Asset>(type: string, key: string, asset: T): void;
        static contains(type: string, key: string): void;

    }
}
// #endregion phina.asset.AssetManager
//=============================================================
// #region phina.asset.AssetLoader
declare module phina.asset {
    /**
     * @class phina.asset.AssetLoader
     * @extends phina.util.EventDispatcher
     */
    export class AssetLoader extends phina.util.EventDispatcher {
        assets: {};
        cache: boolean;

        /**
         * @constructor
         */
        constructor(params?: AssetLoader.OPTIONS);

        load(params: AssetLoader.LOAD_PARAMS): phina.util.Flow;

        static assetLoadFunctions: {
            image: AssetLoader.ASSET_LOAD_FUNCTION;
            sound: AssetLoader.ASSET_LOAD_FUNCTION;
            spritesheet: AssetLoader.ASSET_LOAD_FUNCTION;
            script: AssetLoader.ASSET_LOAD_FUNCTION;
            font: AssetLoader.ASSET_LOAD_FUNCTION;
            json: AssetLoader.ASSET_LOAD_FUNCTION;
            xml: AssetLoader.ASSET_LOAD_FUNCTION;
            text: AssetLoader.ASSET_LOAD_FUNCTION;
        };

        static register(key: string, func: AssetLoader.ASSET_LOAD_FUNCTION): any;
    }
    export namespace AssetLoader {
        type ASSET_LOAD_FUNCTION = (key: string, path: LOAD_SRC) => phina.util.Flow;
        type OPTIONS = {
            /** @default true */
            cache?: boolean,
        };
        type LOAD_PARAMS = {
            image?: { [key: string]: LOAD_SRC },
            sound?: { [key: string]: LOAD_SRC },
            spritesheet?: { [key: string]: LOAD_SRC },
            script?: { [key: string]: LOAD_SRC },
            font?: { [key: string]: LOAD_SRC },
            json?: { [key: string]: LOAD_SRC },
            xml?: { [key: string]: LOAD_SRC },
            text?: { [key: string]: LOAD_SRC },

            //[type: string]: any,
        };
    }
}
// #endregion phina.asset.AssetLoader
//=============================================================
// #region phina.asset.File
declare module phina.asset {
    /**
     * @class phina.asset.File
     * @extends phina.asset.Asset
     */
    export class File extends phina.asset.Asset {
        dataType: string;
        data: any;

        /**
         * @constructor
         */
        constructor();

        _load(resolve: Function): void;
    }
}
// #endregion phina.asset.File
//=============================================================
// #region phina.asset.Script
declare module phina.asset {
    /**
     * @class phina.asset.Script
     * @extends phina.asset.Asset
     */
    export class Script extends phina.asset.Asset {

        /**
         * @constructor
         */
        constructor();

        _load(resolve: Function): void;
    }
}
// #endregion phina.asset.Script
//=============================================================
// #region phina.asset.Texture
declare module phina.asset {
    /**
     * @class phina.asset.Texture
     * @extends phina.asset.Asset
     */
    export class Texture extends phina.asset.Asset {

        /**
         * @constructor
         */
        constructor();

        _load(resolve: Function): void;

        clone(): Texture;

        transmit(color?: phina.util.Color): void;

        filter(filters: Function[] | Function): this;
    }
}
// #endregion phina.asset.Texture
//=============================================================
// #region phina.asset.Sound
declare module phina.asset {
    /**
     * @class phina.asset.Sound
     * @extends phina.asset.Asset
     */
    export class Sound extends phina.asset.Asset {

        _loop: boolean;
        _loopStart: number;
        _loopEnd: number;
        _playbackRate: number;

        context: AudioContext;
        gainNode: GainNode;

        source?: AudioBufferSourceNode;
        buffer?: WebGLBuffer | null;

        volume: number;
        loop: boolean;
        loopStart: number;
        loopEnd: number;
        playbackRate: number;

        /**
         * @constructor
         */
        constructor();

        play(when?: number, offset?: number, duration?: number): this;

        stop(): this;

        pause(): this;

        resume(): this;

        _oscillator(type: string): void;

        loadFromBuffer(buffer?: AudioBuffer): void;

        setLoop(loop: boolean): this;
        setLoopStart(loopStart: number): this;
        setLoopEnd(loopEnd: number): this;

        setPlaybackRate(playbackRate: number): this;

        _load(r: Function): void;

        _loadFromFile(r: Function): void;

        _loadFromURIScheme(r: Function): void;

        loadDummy(): void;

        static getMasterGain(): GainNode;

        static getAudioContext(): AudioContext;
    }
}
// #endregion phina.asset.Sound
//=============================================================
// #region phina.asset.SoundManager
declare module phina.asset {
    /**
     * @class phina.asset.SoundManager
     * ### Ref
     * - http://evolve.reintroducing.com/_source/classes/as3/SoundManager/SoundManager.html
     * - https://github.com/nicklockwood/SoundManager
     */
    export class SoundManager {
        static volume: number;
        static musicVolume: number;
        static muteFlag: boolean;
        static currentMusic: phina.asset.Sound;

        static play(name: string, when?: number, offset?: number, duration?: number): phina.asset.Sound;
        static stop(): void;
        static pause(): void;
        static fade(): void;
        static setVolume(): void;
        static getVolume(): number;

        /*
         * ミュート
         */
        static mute(): typeof SoundManager;
        /*
         * ミュート解除
         */
        static unmute(): typeof SoundManager;
        static isMute(): boolean;

        static playMusic(name: string, fadeTime?: number, loop?: boolean, when?: number, offset?: number, duration?: number): phina.asset.Sound;

        static stopMusic(fadeTime?: number): void;

        /*
         * 音楽を一時停止
         */
        static pauseMusic(): void;
        /*
         * 音楽を再開
         */
        static resumeMusic(): void;
        /*
         * 音楽のボリュームを設定
         */
        static setVolumeMusic(volume: number): typeof SoundManager;
        /*
         * 音楽のボリュームを取得
         */
        static getVolumeMusic(): number;
    }
}
// #endregion phina.asset.SoundManager
//=============================================================
// #region phina.asset.SpriteSheet
declare module phina.asset {
    /**
     * @class phina.asset.SpriteSheet
     * @extends phina.asset.Asset
     */
    export class SpriteSheet extends phina.asset.Asset {
        animations?: SpriteSheet.ANIMATIONS;
        frames?: SpriteSheet.FRAMES;
        frame?: number;

        /**
         * @constructor
         */
        constructor();

        setup(params: SpriteSheet.SETUP_PARAM): this;

        _load(resolve: (self: this) => void): void;

        _setupFrame(frame: SpriteSheet.SETUP_FRAME_PARAM): void;

        _setupAnim(animations: SpriteSheet.SETUP_ANIM_PARAM): void;

        /**
         * フレームを取得
         */
        getFrame(index: number): SpriteSheet.FRAME;

        getAnimation(name?: string): SpriteSheet.ANIMATION;
    }
    export namespace SpriteSheet {
        type ANIMATION = {
            frames: number[],
            next: string,
            frequency?: number,
        };
        type ANIMATIONS = {
            default: ANIMATION,
            [key: string]: ANIMATION,
        };
        type FRAME = {
            x: number,
            y: number,
            width: number,
            height: number,
        };
        type FRAMES = FRAME[];

        type SETUP_FRAME_PARAM = {
            width: number,
            height: number,
            rows: number,
            cols: number,
        };
        type SETUP_ANIM_PARAM = {
            [key: string]: ANIMATION | any[]
        };
        type SETUP_PARAM = {
            frame: SpriteSheet.SETUP_FRAME_PARAM,
            animations: SpriteSheet.SETUP_ANIM_PARAM
        };
    }
}
// #endregion phina.asset.SpriteSheet
//=============================================================
// #region phina.asset.Font
declare module phina.asset {
    /**
     * @class phina.asset.Font
     * @extends phina.asset.Asset
     */
    export class Font extends phina.asset.Asset {
        fontName: string | null;
        format?: string;

        /**
         * @constructor
         */
        constructor();

        load(path: string): phina.util.Flow;

        _load(resolve: Function): void;

        _checkLoaded(font: string, callback: Function): void;

        setFontName(name: string): this;

        getFontName(): string;
    }
}
// #endregion phina.asset.Font
// #endregion phina.asset
//=============================================================
// #region phina.input
// #region phina.input.Input
declare module phina.input {
    /**
     * @class phina.input.Input
     * @extends phina.util.EventDispatcher
     */
    export class Input extends phina.util.EventDispatcher {

        /** domElement */
        domElement: DOMElement;
        position: phina.geom.Vector2;
        startPosition: phina.geom.Vector2;
        deltaPosition: phina.geom.Vector2;
        prevPosition: phina.geom.Vector2;
        maxCacheNum: number;
        minDistance: number;
        maxDistance: number;
        cachePositions: phina.geom.Vector2[];
        flickVelocity: phina.geom.Vector2;
        flags: number;

        last?: number;
        now?: number;
        start?: number;
        end?: number;


        /**
         * @constructor
         */
        constructor(domElement: DOMElement | null);

        update(): void;

        _start(x: number, y: number, flag?: number): void;

        _end(flag: number): void;

        // スケールを考慮
        _move(x: number, y: number): void;

        /**
         * @property    x
         * x座標値
         */
        x: number;
        /**
         * @property    y
         * y座標値
         */
        y: number;
        /**
         * @property    dx
         * dx値
         */
        dx: number;
        /**
         * @property    dy
         * dy値
         */
        dy: number;

        /**
         * @property    fx
         * fx値
         */
        fx: number;
        /**
         * @property    fy
         * fy値
         */
        fy: number;

        static readonly defaults: {
            maxCacheNum: 3;
            minDistance: 10;
            maxDistance: 100;
        };
    }
}
// #endregion phina.input.Input
//=============================================================
// #region phina.input.Mouse
declare module phina.input {
    /**
     * @class phina.input.Mouse
     * @extends phina.input.Input
     */
    export class Mouse extends phina.input.Input {
        id: number;

        /**
         * @constructor
         */
        constructor(domElement: DOMElement | null);

        /**
         * ボタン取得
         */
        getButton(button: string | number): boolean;

        /**
         * ボタンダウン取得
         */
        getButtonDown(button: string | number): boolean;

        /**
         * ボタンアップ取得
         */
        getButtonUp(button: string | number): boolean;

        /** @static @property */
        static readonly BUTTON_LEFT: 0x1;
        /** @static @property */
        static readonly BUTTON_MIDDLE: 0x2;
        /** @static @property */
        static readonly BUTTON_RIGHT: 0x4;

        static readonly BUTTON_MAP: {
            "left": number;
            "middle": number;
            "right": number;
        };

        getPointing(): boolean;
        getPointingStart(): boolean;
        getPointingEnd(): boolean;
    }
}
// #endregion phina.input.Mouse
//=============================================================
// #region phina.input.Touch
declare module phina.input {
    /**
     * @class phina.input.Touch
     * @extends phina.input.Input
     */
    export class Touch extends phina.input.Input {
        id: null;

        /**
         * @constructor
         */
        constructor(domElement: DOMElement | null, isMulti?: boolean);

        /**
         * タッチしているかを判定
         */
        getTouch(): boolean;

        /**
         * タッチ開始時に true
         */
        getTouchStart(): boolean;

        /**
         * タッチ終了時に true
         */
        getTouchEnd(): boolean;

        /**
         * @method
         * ポインティング状態取得(mouse との差異対策)
         */
        getPointing(): boolean;
        /**
         * @method
         * ポインティングを開始したかを取得(mouse との差異対策)
         */
        getPointingStart(): boolean;
        /**
         * @method
         * ポインティングを終了したかを取得(mouse との差異対策)
         */
        getPointingEnd(): boolean;

    }
}
// #endregion phina.input.Touch
//=============================================================
// #region phina.input.TouchList
declare module phina.input {
    /**
     * @class phina.input.TouchList
     */
    export class TouchList {
        domElement: DOMElement;
        touchMap: {};
        touches: phina.input.Touch[];
        _id: Uint32Array;

        constructor(domElement: DOMElement | null);

        getEmpty(): phina.input.Touch;

        getTouch(id: string): phina.input.Touch;


        removeTouch(touch: phina.input.Touch): void;

        update(): void;

        readonly id: number;
    }
}
// #endregion phina.input.TouchList
//=============================================================
// #region phina.input.Keyboard
declare module phina.input {
    /**
     * @class phina.input.Keyboard
     * @extends phina.input.Input
     */
    export class Keyboard extends phina.input.Input {
        key: { [keyCode: number]: boolean };
        press: { [keyCode: number]: boolean };
        down: { [keyCode: number]: boolean };
        up: { [keyCode: number]: boolean };

        /**
         * @constructor
         */
        constructor(domElement: DOMElement | null);

        /**
         * 情報更新処理
         * マイフレーム呼んで下さい.
         * @private
         */
        update(): this;

        /**
         * キーを押しているかをチェック
         * @param   {Number/String} key keyCode or keyName
         * @returns {Boolean}   チェック結果
         */
        getKey(key: number | string): boolean;

        /**
         * キーを押したかをチェック
         * @param   {Number/String} key keyCode or keyName
         * @returns {Boolean}   チェック結果
         */
        getKeyDown(key: number | string): boolean;

        /**
         * キーを離したかをチェック
         * @param   {Number/String} key keyCode or keyName
         * @returns {Boolean}   チェック結果
         */
        getKeyUp(key: number | string): boolean;

        /**
         * キーの方向を Angle(Degree) で取得
         * @returns {Boolean}   角度(Degree)
         */
        getKeyAngle(): number | null;

        /**
         * キーの押している向きを取得
         * 正規化されている
         */
        getKeyDirection(): phina.geom.Vector2;

        /**
         * キーの状態を設定する
         */
        setKey(key: number | string, flag: boolean): this;

        /**
         * キーを全て離したことにする
         */
        clearKey(): this;

        /*
         * @enum ARROW_BIT_TO_ANGLE_TABLE
         * 方向のアングル jsduckでは数字をプロパティに指定できない？
         * @private
         */
        static readonly ARROW_BIT_TO_ANGLE_TABLE: {
            /* @property 下 */
            0x01: 270,
            /* @property 右 */
            0x02: 0,
            /* @property 上 */
            0x04: 90,
            /* @property 左 */
            0x08: 180,

            /* @property 右上 */
            0x06: 45,
            /* @property 右下 */
            0x03: 315,
            /* @property 左上 */
            0x0c: 135,
            /* @property 左下 */
            0x09: 225,

            // 三方向同時押し対応
            // 想定外の操作だが対応しといたほうが無難
            /* @property 右上左 */
            0x0e: 90,
            /* @property 上左下 */
            0x0d: 180,
            /* @property 左下右 */
            0x0b: 270,
            /* @property 下右上 */
            0x07: 0,
        };
        /*
         * @enum KEY_CODE
         * キー番号
         * @private
         */
        static readonly KEY_CODE: {
            /* @property */
            "backspace": 8,
            /* @property */
            "tab": 9,
            /* @property */
            "enter": 13,
            /* @property */
            "return": 13,
            /* @property */
            "shift": 16,
            /* @property */
            "ctrl": 17,
            /* @property */
            "alt": 18,
            /* @property */
            "pause": 19,
            /* @property */
            "capslock": 20,
            /* @property */
            "escape": 27,
            /* @property */
            "pageup": 33,
            /* @property */
            "pagedown": 34,
            /* @property */
            "end": 35,
            /* @property */
            "home": 36,
            /* @property */
            "left": 37,
            /* @property */
            "up": 38,
            /* @property */
            "right": 39,
            /* @property */
            "down": 40,
            /* @property */
            "insert": 45,
            /* @property */
            "delete": 46,

            /* @property */
            "0": 48,
            /* @property */
            "1": 49,
            /* @property */
            "2": 50,
            /* @property */
            "3": 51,
            /* @property */
            "4": 52,
            /* @property */
            "5": 53,
            /* @property */
            "6": 54,
            /* @property */
            "7": 55,
            /* @property */
            "8": 56,
            /* @property */
            "9": 57,
            /* @property */

            "a": 65,
            /* @property */
            "A": 65,
            /* @property */
            "b": 66,
            /* @property */
            "B": 66,
            /* @property */
            "c": 67,
            /* @property */
            "C": 67,
            /* @property */
            "d": 68,
            /* @property */
            "D": 68,
            /* @property */
            "e": 69,
            /* @property */
            "E": 69,
            /* @property */
            "f": 70,
            /* @property */
            "F": 70,
            /* @property */
            "g": 71,
            /* @property */
            "G": 71,
            /* @property */
            "h": 72,
            /* @property */
            "H": 72,
            /* @property */
            "i": 73,
            /* @property */
            "I": 73,
            /* @property */
            "j": 74,
            /* @property */
            "J": 74,
            /* @property */
            "k": 75,
            /* @property */
            "K": 75,
            /* @property */
            "l": 76,
            /* @property */
            "L": 76,
            /* @property */
            "m": 77,
            /* @property */
            "M": 77,
            /* @property */
            "n": 78,
            /* @property */
            "N": 78,
            /* @property */
            "o": 79,
            /* @property */
            "O": 79,
            /* @property */
            "p": 80,
            /* @property */
            "P": 80,
            /* @property */
            "q": 81,
            /* @property */
            "Q": 81,
            /* @property */
            "r": 82,
            /* @property */
            "R": 82,
            /* @property */
            "s": 83,
            /* @property */
            "S": 83,
            /* @property */
            "t": 84,
            /* @property */
            "T": 84,
            /* @property */
            "u": 85,
            /* @property */
            "U": 85,
            /* @property */
            "v": 86,
            /* @property */
            "V": 86,
            /* @property */
            "w": 87,
            /* @property */
            "W": 87,
            /* @property */
            "x": 88,
            /* @property */
            "X": 88,
            /* @property */
            "y": 89,
            /* @property */
            "Y": 89,
            /* @property */
            "z": 90,
            /* @property */
            "Z": 90,

            /* @property */
            "numpad0": 96,
            /* @property */
            "numpad1": 97,
            /* @property */
            "numpad2": 98,
            /* @property */
            "numpad3": 99,
            /* @property */
            "numpad4": 100,
            /* @property */
            "numpad5": 101,
            /* @property */
            "numpad6": 102,
            /* @property */
            "numpad7": 103,
            /* @property */
            "numpad8": 104,
            /* @property */
            "numpad9": 105,
            /* @property */
            "multiply": 106,
            /* @property */
            "add": 107,
            /* @property */
            "subtract": 109,
            /* @property */
            "decimalpoint": 110,
            /* @property */
            "divide": 111,

            /* @property */
            "f1": 112,
            /* @property */
            "f2": 113,
            /* @property */
            "f3": 114,
            /* @property */
            "f4": 115,
            /* @property */
            "f5": 116,
            /* @property */
            "f6": 117,
            /* @property */
            "f7": 118,
            /* @property */
            "f8": 119,
            /* @property */
            "f9": 120,
            /* @property */
            "f10": 121,
            /* @property */
            "f11": 122,
            /* @property */
            "f12": 123,

            /* @property */
            "numlock": 144,
            /* @property */
            "scrolllock": 145,
            /* @property */
            "semicolon": 186,
            /* @property */
            "equalsign": 187,
            /* @property */
            "comma": 188,
            /* @property */
            "dash": 189,
            /* @property */
            "period": 190,
            /* @property */
            "forward slash": 191,
            /* @property */
            "/": 191,
            /* @property */
            "grave accent": 192,
            /* @property */
            "open bracket": 219,
            /* @property */
            "back slash": 220,
            /* @property */
            "close bracket": 221,
            /* @property */
            "single quote": 222,
            /* @property */
            "space": 32
        };
    }
}
// #endregion phina.input.Keyboard
//=============================================================
// #region phina.input.GamepadManager
declare module phina.input {
    /**
     * @class phina.input.GamepadManager
     * ゲームパッドマネージャー.
     * ゲームパッド接続状況の監視、個々のゲームパッドの入力状態の更新を行う.
     * @extends phina.util.EventDispatcher
     */
    export class GamepadManager extends phina.util.EventDispatcher {

        /**
         * 作成済みphina.input.Gamepadオブジェクトのリスト
         *
         * @type {Object.<Number, phina.input.Gamepad>}
         */
        gamepads: { [index: number]: Gamepad };

        /**
         * 作成済みゲームパッドのindexのリスト
         *
         * @type {Number[]}
         * @private
         */
        _created: number[];

        /**
         * ラップ前Gamepadのリスト
         * @type {phina.input.Gamepad[]}
         * @private
         */
        _rawgamepads: phina.input.Gamepad[];

        /**
         * @constructor
         */
        constructor();

        /**
         * 情報更新処理
         * マイフレーム呼んで下さい.
         */
        update(): void;

        /**
         * 指定されたindexのGamepadオブジェクトを返す.
         *
         * 未作成の場合は作成して返す.
         */
        get(index?: number): Gamepad;

        /**
         * 指定されたindexのGamepadオブジェクトを破棄する.
         * 破棄されたGamepadオブジェクトは以降更新されない.
         */
        dispose(index: number): void;

        /**
         * 指定されたindexのゲームパッドが接続中かどうかを返す.
         *
         * Gamepadオブジェクトが未作成の場合でも動作する.
         */
        isConnected(index?: number): boolean;

        /**
         * @private
         */
        _poll(): void;

        /** ブラウザがGamepad APIに対応しているか. */
        static readonly isAvailable: boolean;

    }
}
// #endregion phina.input.GamepadManager
//=============================================================
// #region phina.input.Gamepad
declare module phina.input {
    /**
     * @class phina.input.Gamepad
     * ゲームパッド
     *
     * 直接インスタンス化せず、phina.input.GamepadManagerオブジェクトから取得して使用する.
     */
    export class Gamepad {

        index: number;
        buttons: { value: number, pressed: boolean, last: boolean, down: boolean, up: boolean }[];
        /** @type {Array.<phina.geom.Vector2>} */
        sticks: phina.geom.Vector2[];

        id: any;
        connected: boolean;
        mapping: any;
        timestamp: any;

        constructor(index?: number);

        /**
         * ボタンが押されているか.
         */
        getKey(button: number | string): boolean;

        /**
         * ボタンを押した.
         */
        getKeyDown(button: number | string): boolean;

        /**
         * ボタンを離した.
         */
        getKeyUp(button: number | string): boolean;

        /**
         * 十字キーの入力されている方向.
         */
        getKeyAngle(): number | null;

        /**
         * 十字キーの入力されている方向をベクトルで.
         * 正規化されている.
         */
        getKeyDirection(): phina.geom.Vector2;

        /**
         * スティックの入力されている方向.
         */
        getStickAngle(): number | null;

        /**
         * スティックの入力されている方向をベクトルで.
         */
        getStickDirection(): phina.geom.Vector2;

        /**
         * @private
         */
        _updateState(gamepad: Gamepad): void;

        /**
         * @private
         */
        _updateStateEmpty(): void;

        /**
         * @private
         */
        _updateButton(value: number | {}, buttonId: number): void;

        /**
         * @private
         */
        _updateStick(value: any, stickId: number, axisName: string): void;

        /** ブラウザがGamepad APIに対応しているか. */
        static readonly isAvailable: boolean;

        /** アナログ入力対応のボタンの場合、どの程度まで押し込むとonになるかを表すしきい値. */
        static readonly ANALOGUE_BUTTON_THRESHOLD: 0.5;

        /** ボタン名とボタンIDのマップ. */
        static readonly BUTTON_CODE: {
            'a': 0,
            'b': 1,
            'x': 2,
            'y': 3,

            'l1': 4,
            'r1': 5,
            'l2': 6,
            'r2': 7,

            'select': 8,
            'start': 9,

            'l3': 10,
            'r3': 11,

            'up': 12,
            'down': 13,
            'left': 14,
            'right': 15,

            'special': 16,

            'A': 0,
            'B': 1,
            'X': 2,
            'Y': 3,

            'L1': 4,
            'R1': 5,
            'L2': 6,
            'R2': 7,

            'SELECT': 8,
            'START': 9,

            'L3': 10,
            'R3': 11,

            'UP': 12,
            'DOWN': 13,
            'LEFT': 14,
            'RIGHT': 15,

            'SPECIAL': 16,
        };
    }
}
// #endregion phina.input.Gamepad
//=============================================================
// #region phina.input.Accelerometer
declare module phina.input {
    /**
     * @class phina.input.Accelerometer
     * スマートフォンのセンサー情報
     */
    export class Accelerometer {
        /** @property  gravity 重力センサー */
        gravity: phina.geom.Vector3;
        /** @property  acceleration 加速度センサー */
        acceleration: phina.geom.Vector3;
        /** @property  rotation 回転加速度センサー */
        rotation: phina.geom.Vector3;
        /** @property  orientation スマートフォンの傾き */
        orientation: phina.geom.Vector3;

        /**
         * @constructor
         */
        constructor();
    }
}
// #endregion phina.input.Accelerometer
// #endregion phina.input
//=============================================================
// #region phina.app
// #region phina.app.Updater
declare module phina.app {
    /**
     * @class phina.app.Updater
     */
    export class Updater {
        app: phina.app.BaseApp;

        constructor(app: phina.app.BaseApp);

        update(root: Element): void;

        _updateElement(element: Element): void;
        _checkPoint(obj: {}): void;
        __checkPoint(obj: {}, p: {}): void;

    }
}
// #endregion phina.app.Updater
//=============================================================
// #region phina.app.Interactive
declare module phina.app {
    /**
     * @class phina.app.Interactive
     */
    export class Interactive {
        app: phina.app.BaseApp;
        _enable: boolean;
        multiTouch: boolean;
        cursor: { normal: string, hover: string };
        _holds: any[];

        constructor(app: phina.app.BaseApp);

        enable(): this;
        disable(): this;

        check(root: Element): void;

        _checkElement(element: Element): void;
        _checkPoint(obj: {}): void;
        __checkPoint(obj: {}, p: {}): void;
    }
}
// #endregion phina.app.Interactive
//=============================================================
// #region phina.app.BaseApp
declare module phina.app {
    /**
     * @class phina.app.BaseApp
     * ベースとなるアプリケーションクラス
     * @extends phina.util.EventDispatcher
     */
    export class BaseApp extends phina.util.EventDispatcher {
        /** awake */
        awake: boolean;
        /** fps */
        // fps: number | null;
        /** frame */
        //frame: number | null;

        updater: phina.app.Updater;
        interactive: phina.app.Interactive;
        ticker: phina.util.Ticker;


        /**
         * @constructor
         */
        constructor();

        run(): this;

        replaceScene(scene: Scene): this;

        pushScene(scene: Scene): this;

        /**
         * シーンをポップする(ポーズやオブション画面などで使用)
         */
        popScene(): Scene;

        /**
         * シーンのupdateを実行するようにする
         */
        start(): this;

        /**
         * シーンのupdateを実行しないようにする
         */
        stop(): this;

        enableStats(): this;

        enableDatGUI(callback: Function): this;

        _loop(): void;

        _update(): void;

        /**
         * 描画用仮想関数
         * @private
         */
        _draw(): void;

        currentScene: Scene;
        rootScene: Scene;
        frame: number;
        fps: number;
        readonly deltaTime: number;
        readonly elapsedTime: number;
        readonly currentTime: number;
        readonly startTime: number;

    }
}
// #endregion phina.app.BaseApp
//=============================================================
// #region phina.app.Element
declare module phina.app {
    /**
     * @class phina.app.Element
     * @extends phina.util.EventDispatcher
     * # 主に要素の親子関係を扱うクラス
     * 主に親子関係等を定義するクラスです。
     */
    export class Element extends phina.util.EventDispatcher {

        /**
         * @property parent
         * 親要素
         */
        parent: Element;

        /**
         * @property children
         * 子要素
         */
        children: Element[];

        /**
         * @property awake
         * 有効かどうか
         */
        awake: boolean;

        /**
         * 追加可能
         */
        [key: string]: any;

        /**
         * @constructor
         */
        constructor();

        /**
         * @method addChild
         * 自身に子要素を追加します。
         *
         * 自身を子要素として引数で指定した要素に追加するには {@link #addChildTo} を使用してください。
         *
         * @param Object child 追加する子要素
         */
        addChild<T extends Element>(child: T): T;
        /**
         * @method addChildTo
         * 自身を子要素として引数で指定した要素に追加します。
         *
         * 自身に子要素を追加するには {@link #addChild} を使用してください。
         *
         * @param Object parent 自身を子要素として追加する要素
         */
        addChildTo(parent: Element): this;
        /**
         * @method addChildAt
         * 自身を、指定した要素の子要素の任意の配列インデックスに追加します。
         *
         * @param Object child 追加する子要素
         * @param {Number} index インデックス番号
         */
        addChildAt<T extends Element>(child: T, index: number): T;
        /**
         * @method getChildAt
         * 指定したインデックスの子要素を返します。
         *
         * @param {Number} index インデックス番号
         * @return Object 指定したインデックスの子要素
         */
        getChildAt<T extends Element>(index: number): T;
        /**
         * @method getChildByName
         * 指定した名前の子要素を返します。（未実装）
         */
        getChildByName(name: string): void;
        /**
         * @method getChildIndex
         * 指定した子要素のインデックス番号を返します。
         *
         * @param Object child 子要素
         * @return {Number} 指定した子要素のインデックス番号
         */
        getChildIndex<T extends Element>(child: T): number;
        /**
         * @method getParent
         * 指定した要素の親要素を返します。
         *
         * @return Object 指定した要素の親要素
         */
        getParent<T extends Element>(): T;
        /**
         * @method getRoot
         * 指定した要素の階層ツリーのルートを返します。
         *
         * @return Object 指定した要素の階層ツリーのルート
         */
        getRoot<T extends Element>(): T;
        /**
         * @method removeChild
         * @chainable
         * 指定した要素を自身の子要素から削除します。
         *
         * @param Object child 要素
         */
        removeChild<T extends Element>(child: T): this;
        /**
         * @method remove
         * 自身を親要素の子要素から削除します。
         */
        remove(): this;
        /**
         * @method isAwake
         * 自身が有効かどうかを返します。
         *
         * @return {Boolean} 有効かどうか
         */
        isAwake(): boolean;
        /**
         * @method wakeUp
         * 自身を有効にします。
         */
        wakeUp(): this;
        /**
         * @method sleep
         * 自身を無効にします。
         */
        sleep(): this;
        /**
         * @method fromJSON
         * JSON 形式を使って自身に子要素を追加することができます。
         *
         * ### Example
         *      this.fromJSON({
         *        "children": {
         *          "label": {                  //キー名が追加する子要素の名前になる
         *            "className": "Label",     //クラス
         *            "arguments": ['hello!'],  //初期化時の引数
         *            "x":320,                  //その他プロパティ
         *            "y":480,
         *          },
         *        },
         *      });
         *
         * @param {JSON} json JSON 形式
         */
        fromJSON(json: {}): this;
        /**
         * @method toJSON
         * 自身の子要素を JSON 形式で返します。
         *
         * @return {JSON} JSON形式
         */
        toJSON(): string;

    }
}
// #endregion phina.app.Element
//=============================================================
// #region phina.app.Object2D
declare module phina.app {
    /**
     * @class phina.app.Object2D
     * Object2D
     * @extends phina.app.Element
     */
    export class Object2D extends phina.app.Element {

        /** 位置 */
        position: phina.geom.Vector2;
        /** 回転 */
        rotation: number;
        /** スケール */
        scale: phina.geom.Vector2;
        /** 基準位置 */
        origin: phina.geom.Vector2;

        _matrix: phina.geom.Matrix33;
        _worldMatrix: phina.geom.Matrix33;
        boundingType: string;

        /**
         * @constructor
         */
        constructor(options: Object2D.OPTIONS);

        /**
         * 点と衝突しているかを判定
         * @param {Number} x
         * @param {Number} y
         */
        hitTest(x: number, y: number): boolean;

        hitTestRect(x: number, y: number): boolean;

        hitTestCircle(x: number, y: number): boolean;

        /**
         * 要素と衝突しているかを判定
         * @param Object elm
         */
        hitTestElement(elm: Object2D): boolean;


        globalToLocal(p: phina.geom.Vector2): phina.geom.Vector2;

        setInteractive(flag: boolean, type: string): this;

        /**
         * X 座標値をセット
         * @param {Number} x
         */
        setX(x: number): this;

        /**
         * Y 座標値をセット
         * @param {Number} y
         */
        setY(y: number): this;

        /**
         * XY 座標をセット
         * @param {Number} x
         * @param {Number} y
         */
        setPosition(x: number, y: number): this;

        /**
         * 回転をセット
         * @param {Number} rotation
         */
        setRotation(rotation: number): this;

        /**
         * スケールをセット
         * @param {Number} x
         * @param {Number} y
         */
        setScale(x: number, y: number): this;
        setScale(scale: number): this;

        /**
         * 基準点をセット
         * @param {Number} x
         * @param {Number} y
         */
        setOrigin(x: number, y: number): this;

        /**
         * 幅をセット
         * @param {Number} width
         */
        setWidth(width: number): this;

        /**
         * 高さをセット
         * @param {Number} height
         */
        setHeight(height: number): this;

        /**
         * サイズ(幅, 高さ)をセット
         * @param {Number} width
         * @param {Number} height
         */
        setSize(width: number, height: number): this;

        setBoundingType(type: string): this;

        moveTo(x: number, y: number): this;

        moveBy(x: number, y: number): this;

        _calcWorldMatrix(): this | undefined;

        /**
         * @property    x
         * x座標値
         */
        x: number;
        /**
         * @property    y
         * y座標値
         */
        y: number;

        /**
         * @property    originX
         * x座標値
         */
        originX: number;

        /**
         * @property    originY
         * y座標値
         */
        originY: number;

        /**
         * @property    scaleX
         * スケールX値
         */
        scaleX: number;

        /**
         * @property    scaleY
         * スケールY値
         */
        scaleY: number;

        /**
         * @property    width
         * width
         */
        width: number;
        /**
         * @property    height
         * height
         */
        height: number;

        /**
         * @property    radius
         * 半径
         */
        radius: number;

        /**
         * @property    top
         * 左
         */
        top: number;

        /**
         * @property    right
         * 左
         */
        right: number;

        /**
         * @property    bottom
         * 左
         */
        bottom: number;

        /**
         * @property    left
         * 左
         */
        left: number;

        /**
         * @property    centerX
         * centerX
         */
        readonly centerX: number;

        /**
         * @property    centerY
         * centerY
         */
        readonly centerY: number;

    }
    export namespace Object2D {
        type OPTIONS = {
            /** @default 0 */
            x?: number,
            /** @default 0 */
            y?: number,
            /** @default 1 */
            scaleX?: number,
            /** @default 1 */
            scaleY?: number,
            /** @default 0 */
            rotation?: number,
            /** @default 0.5 */
            originX?: number,
            /** @default 0.5 */
            originY?: number,

            /** @default 64 */
            width?: number,
            /** @default 64 */
            height?: number,
            /** @default 32 */
            radius?: number,
            /** @default 'rect' */
            boundingType?: string,
        };
    }
}
// #endregion phina.app.Object2D
//=============================================================
// #region phina.app.Scene
declare module phina.app {
    /**
     * @class phina.app.Scene
     * @extends phina.app.Element
     */
    export class Scene extends phina.app.Element {
        app?: phina.app.BaseApp;
        nextLabel?: string;
        nextArguments?: {};

        constructor();

        exit(nextLabel?: {} | string, nextArguments?: {}): this | undefined;
    }
}
// #endregion phina.app.Scene
// #endregion phina.app
//=============================================================
// #region phina.accessory
// #region phina.accessory.Accessory
declare module phina.accessory {
    /**
     * @class phina.accessory.Accessory
     * @extends phina.util.EventDispatcher
     */
    export class Accessory extends phina.util.EventDispatcher {
        target: phina.app.Element;

        /**
         * @constructor
         */
        constructor(target: phina.app.Element);
        setTarget(target: phina.app.Element): this;
        getTarget(): phina.app.Element;
        isAttached(): boolean;
        attachTo(element: phina.app.Element): this;
        remove(): void;
    }
}
declare module phina.app {
    interface Element {
        detach(accessory: phina.accessory.Accessory): Element;
    }
}
// #endregion phina.accessory.Accessory
//=============================================================
// #region phina.accessory.Tweener
declare module phina.accessory {
    /**
     * @class phina.accessory.Tweener
     * # Tweener
     * Tweenerはオブジェクトのプロパティに対して、
     * Tweenアニメーションの効果を与えるクラスです。  
     * 主に {@link phina.app.Element} とそのサブクラスで使用されます。
     * @extends phina.accessory.Accessory
     */
    export class Tweener extends phina.accessory.Accessory {
        // TODO
        /**
         * アニメーションを更新する方法を指定します。  
         * 変更するとdurationによる時間の進み方が変わります。  
         * 詳しくは{@link #UPDATE_MAP}を参照してください。
         */
        updateType: string;

        _loop: boolean;
        _tasks: any[];
        _index: number;
        playing: boolean;
        _update: Function;

        /**
         * @constructor
         */
        constructor(target: phina.app.Element);

        _init(): void;

        /**
         * @param {phina.app.BaseApp} app
         */
        update(app: phina.app.BaseApp): void;

        /**
         * {@link #updateType}を変更します。
         * @param {String} type 更新方法を表す文字列
         * @chainable
         */
        setUpdateType(type: string): this;

        /**
         * propsで指定した値になるまで、durationで指定した時間をかけて、アニメーションさせます。
         * @param Object props 変更したいプロパティをkeyとしたオブジェクト
         * @param {Number} duration (optional) アニメーションにかける時間
         * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
         * @chainable
         * 
         */
        to(props: {}, duration?: number, easing?: string): this;

        /**
         * アニメーション開始時の値とpropsで指定した値を加算した値になるまで、durationで指定した時間をかけて、アニメーションさせます。
         * @param Object props 変更したいプロパティをkeyとしたオブジェクト
         * @param {Number} duration (optional) アニメーションにかける時間
         * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
         * @chainable
         */
        by(props: {}, duration?: number, easing?: string): this;

        /**
         * propsで指定した値からアニメーション開始時の値になるまで、durationで指定した時間をかけて、アニメーションさせます。
         * @param Object props 変更したいプロパティをkeyとしたオブジェクト
         * @param {Number} duration (optional) アニメーションにかける時間
         * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
         * @chainable
         */
        from(props: {}, duration?: number, easing?: string): this;

        /**
         * 指定した時間が経過するまで待機します。
         * @param {Number} time waitする時間
         * @chainable
         */
        wait(time: number): this;

        /**
         * 現在設定されているアニメーションが終了した時に呼び出される関数をセットします。
         * @param {Function} func 呼び出される関数
         * @param Object self (optional) func内でthisにしたいオブジェクト。
         * @param {Object[]} args (optional) funcの引数にしたい値
         * @chainable
         */
        call(func: Function, self?: {}, args?: {}[]): this;

        /**
         * 現在設定されているアニメーションが終了した時にプロパティをセットします。  
         * 第一引数にオブジェクトをセットすることもできます。
         * @param {String | {}} key valueをセットするプロパティ名か、変更したいプロパティをkeyとしたオブジェクト。
         * @param Object value (optional) セットする値
         * @chainable
         */
        set(key: string | {}, value?: {}): this;

        /**
         * x, yに対して、 {@link #to} の処理を行います。
         * @param {Number} x
         * @param {Number} y
         * @param {Number} duration (optional) アニメーションにかける時間
         * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
         * @chainable
         */
        moveTo(x: number, y: number, duration?: number, easing?: string): this;

        /**
         * x, yに対して、 {@link #by} の処理を行います。
         * @param {Number} x
         * @param {Number} y
         * @param {Number} duration (optional) アニメーションにかける時間
         * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
         * @chainable
         */
        moveBy(x: number, y: number, duration?: number, easing?: string): this;

        /**
         * rotationに対して、 {@link #to} の処理を行います。
         * @param {Number} rotation
         * @param {Number} duration (optional) アニメーションにかける時間
         * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
         * @chainable
         */
        rotateTo(rotation: number, duration?: number, easing?: string): this;

        /**
         * rotationに対して、 {@link #by} の処理を行います。
         * @param {Number} rotation
         * @param {Number} duration (optional) アニメーションにかける時間
         * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
         * @chainable
         */
        rotateBy(rotation: number, duration?: number, easing?: string): this;

        /**
         * scaleX, scaleYに対して {@link #to} の処理を行います。
         * @param {Number} scale scaleXとscaleYに設定する値
         * @param {Number} duration (optional) アニメーションにかける時間
         * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
         * @chainable
         */
        scaleTo(scale: number, duration?: number, easing?: string): this;
        /**
         * scaleX, scaleYに対して {@link #by} の処理を行います。
         * @param {Number} scale scaleXとscaleYに設定する値
         * @param {Number} duration (optional) アニメーションにかける時間
         * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
         * @chainable
         */
        scaleBy(scale: number, duration?: number, easing?: string): this;

        /**
         * alphaに対して {@link #to} の処理を行います。
         * @param {Number} value alphaに設定する値
         * @param {Number} duration (optional) アニメーションにかける時間
         * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
         * @chainable
         */
        fade(value: number, duration?: number, easing?: string): this;

        /**
         * alphaを0にするアニメーションを設定します。
         * @param {Number} duration (optional) アニメーションにかける時間
         * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
         * @chainable
         */
        fadeOut(duration?: number, easing?: string): this;

        /**
         * alphaを1にするアニメーションを設定します。
         * @param {Number} duration (optional) アニメーションにかける時間
         * @param {String} easing (optional) easing {@link phina.util.Tween#EASING}を参照してください。
         * @chainable
         */
        fadeIn(duration?: number, easing?: string): this;

        /**
         * アニメーション開始
         * @chainable
         */
        play(): this;

        /**
         * アニメーションを一時停止
         * @chainable
         */
        pause(): this;

        /**
         * アニメーションを停止し、最初まで巻き戻します。
         * @chainable
         */
        stop(): this;

        /**
         * アニメーションを巻き戻す
         * @chainable
         */
        rewind(): this;

        yoyo(): this;

        /**
         * アニメーションループ設定
         * @param {Boolean} flag
         * @chainable
         */
        setLoop(flag: boolean): this;

        /**
         * アニメーションをクリア
         * @chainable
         */
        clear(): this;

        /**
         * JSON形式でアニメーションを設定します。
         * @chainable
         * @param Object json
         * @param {Boolean} json.loop (optional) ループする場合true
         * @param {Array[]} json.tweens 設定するアニメーション
         * 
         * ```
         * [
         *   [method, arg1, arg2,,,],
         *   ['to', {value: 100}, 1000, 'swing'],
         *   ['wait', 1000],
         *   ['set', 'text', 'END']
         * ]
         * ```
         */
        fromJSON(json: {}): this;

        _add(params: any): void;
        _updateTask(app: any): void;
        _updateTween(app: any): void;
        _updateWait(app: any): void;
        _getUnitTime(app: any): number;
        _getDefaultDuration(): number;

        /**
         * @static
         * {@link #updateType}に設定する更新方法の定義です。
         * 下記の表に定義済みの更新方法を{@link #updateType}に設定することで、
         * アニメーションの更新方法を変更することができます。
         * 
         * | 更新方法 | 単位(デフォルト値) | 1フレームあたりのアニメーション速度 |
         * |-|-|-|
         * | normal | ミリ秒(1000) | app.fpsによって変化 |
         * | delta | ミリ秒(1000) | 経過時間によって変化 |
         * | fps | フレーム(30) | 必ず同じ速度で変化 |
         */
        static readonly UPDATE_MAP: {
            normal: { func: (app: phina.app.BaseApp) => number };
            delta: { func: (app: phina.app.BaseApp) => number };
            fps: { func: (app: phina.app.BaseApp) => number };
        };
    }
}
declare module phina.app {
    export interface Element {
        /**
         * @member phina.app.Element
         * @property tweener
         * 自身にアタッチ済みの{@link phina.accessory.Tweener}オブジェクト。
         */
        readonly tweener: phina.accessory.Tweener;
    }
}
// #endregion phina.accessory.Tweener
//=============================================================
// #region phina.accessory.Draggable
declare module phina.accessory {
    /**
     * @class phina.accessory.Draggable
     * Draggable
     * @extends phina.accessory.Accessory
     */
    export class Draggable extends phina.accessory.Accessory {
        initialPosition?: phina.geom.Vector2;
        x?: number;
        y?: number;
        _dragging?: boolean;
        _enable?: boolean;

        /**
         * @constructor
         */
        constructor(target: phina.app.Element);

        back(time?: number, easing?: string): void;

        enable(): void;

        static _lock: boolean;
        static lock(): void;
        static unlock(): void;

    }
}
declare module phina.app {
    export interface Element {
        readonly draggable: phina.accessory.Draggable;
    }
}
// #endregion phina.accessory.Draggable
//=============================================================
// #region phina.accessory.Flickable
declare module phina.accessory {
    /**
     * @class phina.accessory.Flickable
     * Flickable
     * @extends phina.accessory.Accessory
     */
    export class Flickable extends phina.accessory.Accessory {
        friction: number;
        velocity: phina.geom.Vector2;
        vertical: boolean;
        horizontal: boolean;
        cacheList: phina.geom.Vector2[];

        /**
         * @constructor
         */
        constructor(target: phina.app.Element);

        update(): void;
        cancel(): void;
        enable(): void;
    }
}
declare module phina.app {
    export interface Element {
        readonly flickable: phina.accessory.Flickable;
    }
}
// #endregion phina.accessory.Flickable
//=============================================================
// #region phina.accessory.FrameAnimation
declare module phina.accessory {
    /**
     * @class phina.accessory.FrameAnimation
     * FrameAnimation
     * @extends phina.accessory.Accessory
     */
    export class FrameAnimation extends phina.accessory.Accessory {
        ss: phina.asset.SpriteSheet;
        paused: boolean;
        finished: boolean;
        fit: boolean;
        currentAnimation?: phina.asset.SpriteSheet.ANIMATION;
        currentFrameIndex?: number;
        frame?: number;
        currentAnimationName?: string;

        /**
         * @constructor
         */
        constructor(ss: string);

        update(): void;
        gotoAndPlay(name: string, keep?: boolean): this;
        gotoAndStop(name: string): this;
        _updateFrame(): void;
    }
}
// #endregion phina.accessory.FrameAnimation
//=============================================================
// #region phina.accessory.Physical
declare module phina.accessory {
    /**
     * @class phina.accessory.Physical
     * 本物ではないので名前変えるかも
     * FakePhysical or MarioPhysical or LiePhysical
     * RetroPysical or PysicaLike
     * @extends phina.accessory.Accessory
     */
    export class Physical extends phina.accessory.Accessory {
        velocity: phina.geom.Vector2;
        gravity: phina.geom.Vector2;
        friction: number;

        /**
         * @constructor
         */
        constructor(target: phina.app.Element);

        update(): void;
        force(x: number, y: number): this;
        addForce(x: number, y: number): this;
        setGravity(x: number, y: number): this;
        setFriction(fr: number): this;
    }
}
declare module phina.app {
    export interface Element {
        readonly physical: phina.accessory.Physical;
    }
}
// #endregion phina.accessory.Physical
// #endregion phina.accessory
//=============================================================
// #region global
// #region Event
/**
 * @class global.Event
 * 既存のEventオブジェクト拡張
 */
interface Event {
    /**
     * @method stop
     * イベントのデフォルト処理 & 伝達を止める
     */
    stop(): void;
}
// #endregion Event
//=============================================================
// #region MouseEvent
/**
 * @class global.MouseEvent
 * MouseEvent クラス
 */
interface MouseEvent {
    /**
     * @method    pointX
     * マウスのX座標.
     */
    readonly pointX: number;
    /**
     * @method    pointY
     * マウスのY座標.
     */
    readonly pointY: number;
}
// #endregion MouseEvent
//=============================================================
// #region TouchEvent
/**
 * @class global.TouchEvent
 * TouchEvent クラス
 */
interface TouchEvent {
    /**
     * @method    pointX
     * タッチイベント.
     */
    readonly pointX: number;
    /**
     * @method    pointY
     * タッチイベント.
     */
    readonly pointY: number;
}
// #endregion TouchEvent
//=============================================================
// #region Touch
/**
 * @class global.Touch
 * TouchEvent クラス
 */
interface Touch {
    /**
     * @method    pointX
     * タッチイベント.
     */
    readonly pointX: number;
    /**
     * @method    pointY
     * タッチイベント.
     */
    readonly pointY: number;
}
// #endregion Touch
// #endregion global
//=============================================================
// #region phina.graphics
// #region phina.graphics.Canvas
declare module phina.graphics {
    /**
     * @class phina.graphics.Canvas
     * キャンバス拡張クラス
     */
    export class Canvas {
        domElement: DOMElement;
        canvas: Element;
        context: CanvasRenderingContext2D;

        /**
         * 初期化
         */
        constructor(canvas?: Element | string);

        /**
         * サイズをセット
         */
        setSize(width: number, height: number): this;

        setSizeToScreen(): this;

        fitScreen(isEver?: boolean): this;

        /**
         * クリア
         */
        clear(x?: number, y?: number, width?: number, height?: number): this;

        clearColor(fillStyle: string | CanvasGradient | CanvasPattern, x?: number, y?: number, width?: number, height?: number): this;


        /**
         * パスを開始(リセット)
         */
        beginPath(): this;

        /**
         *  パスを閉じる
         */
        closePath(): this;


        /**
         *  新規パス生成
         */
        moveTo(x: number, y: number): this;

        /**
         * パスに追加
         */
        lineTo(x: number, y: number): this;

        quadraticCurveTo(): this;

        bezierCurveTo(): this;

        /**
         * パス内を塗りつぶす
         */
        fill(): this;

        /**
         * パス上にラインを引く
         */
        stroke(): this;

        /**
         * クリップ
         */
        clip(): this;


        /**
         * 点描画
         */
        drawPoint(x: number, y: number): this;

        /**
         * ラインパスを作成
         */
        line(x0: number, y0: number, x1: number, y1: number): this;

        /**
         * ラインを描画
         */
        drawLine(x0: number, y0: number, x1: number, y1: number): this;

        /**
         * ダッシュラインを描画
         */
        drawDashLine(x0: number, y0: number, x1: number, y1: number, pattern?: string | number): this;

        /**
         * v0(x0, y0), v1(x1, y1) から角度を求めて矢印を描画
         * http://hakuhin.jp/as/rotation.html
         */
        drawArrow(x0: number, y0: number, x1: number, y1: number, arrowRadius?: number): this;


        /**
         * lines
         */
        lines(): this;

        /**
         * ラインストローク描画
         */
        strokeLines(): this;

        /**
         * ライン塗りつぶし描画
         */
        fillLines(): this;

        /**
         * 四角形パスを作成する
         */
        rect(x: number, y: number, width: number, height: number): this;

        /**
         * 四角形塗りつぶし描画
         */
        fillRect(): this;

        /**
         * 四角形ライン描画
         */
        strokeRect(): this;

        /**
         * 角丸四角形パス
         */
        strokeRect(x: number, y: number, width: number, height: number, radius: number): this;

        /**
         * 角丸四角形塗りつぶし
         */
        fillRoundRect(x: number, y: number, width: number, height: number, radius: number): this;

        /**
         * 角丸四角形ストローク描画
         */
        strokeRoundRect(x: number, y: number, width: number, height: number, radius: number): this;

        /**
         * 円のパスを設定
         */
        circle(x: number, y: number, radius: number): this;

        /**
         * 塗りつぶし円を描画
         */
        fillCircle(x: number, y: number, radius: number): this;

        /**
         * ストローク円を描画
         */
        strokeCircle(x: number, y: number, radius: number): this;

        /**
         * 円弧のパスを設定
         */
        arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): this;

        /**
         * 塗りつぶし円弧を描画
         */
        fillArc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): this;

        /**
         * ストローク円弧を描画
         */
        strokeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): this;


        pie(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): this;
        fillPie(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): this;
        strokePie(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): this;


        /**
         * ポリゴンパス
         */
        polygon(x: number, y: number, size: number, sides: number, offsetAngle?: number): this;
        /**
         * ポリゴン塗りつぶし
         */
        fillPolygon(x: number, y: number, radius: number, sides: number, offsetAngle?: number): this;
        /**
         * ポリゴンストローク描画
         */
        strokePolygon(x: number, y: number, radius: number, sides: number, offsetAngle?: number): this;

        /**
         * star
         */
        star(x?: number, y?: number, radius?: number, sides?: number, sideIndent?: number, offsetAngle?: number): this;

        /**
         * 星を塗りつぶし描画
         */
        fillStar(x?: number, y?: number, radius?: number, sides?: number, sideIndent?: number, offsetAngle?: number): this;

        /**
         * 星をストローク描画
         */
        strokeStar(x?: number, y?: number, radius?: number, sides?: number, sideIndent?: number, offsetAngle?: number): this;

        /*
         * heart
         */
        heart(x: number, y: number, radius: number, angle?: number): this;

        /*
         * fill heart
         */
        fillHeart(x: number, y: number, radius: number, angle?: number): this;

        /*
         * stroke heart
         */
        strokeHeart(x: number, y: number, radius: number, angle?: number): this;

        /*
         * http://stackoverflow.com/questions/14169234/the-relation-of-the-bezier-curve-and-ellipse
         */
        ellipse(x: number, y: number, w: number, h: number): this;
        fillEllipse(x: number, y: number, width: number, height: number): this;
        strokeEllipse(x: number, y: number, width: number, height: number): this;

        fillText(text: string, x: number, y: number, maxWidth?: number): this;
        strokeText(text: string, x: number, y: number, maxWidth?: number): this;

        /*
         * 画像を描画
         */
        drawImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, dstX: number, dstY: number): void;
        drawImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, dstX: number, dstY: number, dstW: number, dstH: number): void;
        drawImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, srcX: number, srcY: number, srcW: number, srcH: number, dstX: number, dstY: number, dstW: number, dstH: number): void;

        /**
         * 行列をセット
         */
        setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): this;

        /**
         * 行列をリセット
         */
        resetTransform(): this;
        /**
         * 中心に移動
         */
        transformCenter(): this;

        /**
         * 移動
         */
        translate(x: number, y: number): this;

        /**
         * 回転
         */
        rotate(rotation: number): this;

        /**
         * スケール
         */
        scale(scaleX: number, scaleY: number): this;

        /**
         * 状態を保存
         */
        save(): this;

        /**
         * 状態を復元
         */
        restore(): this;

        /**
         * 画像として保存
         */
        saveAsImage(mime_type?: string): void;


        /**
         * 幅
         */
        width: number;

        /**
         * 高さ
         */
        height: number;

        fillStyle: string | CanvasGradient | CanvasPattern;
        strokeStyle: string | CanvasGradient | CanvasPattern;
        globalAlpha: number;
        globalCompositeOperation: string;
        shadowBlur: number;
        shadowColor: string;
        shadowOffsetX: number;
        shadowOffsetY: number;
        lineCap: string;
        lineJoin: string;
        miterLimit: number;
        lineWidth: number;
        font: string;
        textAlign: string;
        textBaseline: string;
        imageSmoothingEnabled: boolean;

        static _context: CanvasRenderingContext2D | null;

        static measureText(font: string, text: string): TextMetrics;
        static createLinearGradient(): CanvasGradient;
        static createRadialGradient(): CanvasGradient;
    }
}
// #endregion phina.graphics.Canvas
//=============================================================
// #region phina.graphics.CanvasRecorder
declare module phina.graphics {
    /**
     * @class phina.graphics.CanvasRecorder
     * Reference <https://github.com/jnordberg/gif.js/>
     * @extends phina.util.EventDispatcher
     */
    export class CanvasRecorder extends phina.util.EventDispatcher {

        _id: number | null;
        objectURL: string | null;

        canvas: Canvas;
        gif: any;

        constructor(canvas: Canvas, options?: CanvasRecorder.OPTIONS);

        /**
         * key と value はアクセサを参照
         */
        setOption(key: string, value: any): this;

        /**
         * key と value はアクセサを参照
         */
        setOptions(options: {}): this;

        start(fps?: number, recordingTime?: number): this;

        stop(): this;

        open(): void;

        width: number | null;

        height: number | null;

        // GIF のクオリティ。低いほどハイクオリティ
        quality: number;

        // Worker の URL デフォルトで gif.worker.js
        workerScript: string;

        // 起動する Worker の数
        workers: number;

        // ループするか 0 でループ -1 でループしない
        repeat: number;

        // true で ループ false でループしない
        loop: boolean;

        // 透過する色 ? transparent hex color, 0x00FF00 = green
        transparent: number;

        // background color where source image is transparent
        background: string;
    }
    export namespace CanvasRecorder {
        type OPTIONS = {
            /** @default 4 */
            workers?: number,
            /** @default 10 */
            quality?: number,
            /** @default canvas.width */
            width?: number,
            /** @default canvas.height */
            height?: number,
        };
    }
}
// #endregion phina.graphics.CanvasRecorder
// #endregion phina.graphics
//=============================================================
// #region phina.display
// #region phina.display.DisplayElement
declare module phina.display {
    /**
     * @class phina.display.DisplayElement
     * @extends phina.app.Object2D
     */
    export class DisplayElement extends phina.app.Object2D {

        /** 表示フラグ */
        visible: boolean;
        /** アルファ */
        alpha: number;
        /** ブレンドモード */
        blendMode: string;

        /** 子供を 自分のCanvasRenderer で描画するか */
        renderChildBySelf: boolean;

        constructor(options?: DisplayElement.OPTIONS);

        /**
         * 表示/非表示をセット
         */
        setVisible(flag: boolean): this;

        /**
         * 表示
         */
        show(): this;

        /**
         * 非表示
         */
        hide(): this;

        /**
         * @private
         */
        _calcWorldAlpha(): void;
    }
    export namespace DisplayElement {
        type OPTIONS = phina.app.Object2D.OPTIONS;
    }
}
// #endregion phina.display.DisplayElement
//=============================================================
// #region phina.display.PlainElement
declare module phina.display {
    /**
     * @class phina.display.PlainElement
     * @extends phina.display.DisplayElement
     */
    export class PlainElement extends phina.display.DisplayElement {
        canvas: phina.graphics.Canvas;

        constructor(options?: PlainElement.OPTIONS);
        draw(canvas: phina.graphics.Canvas): void;
    }
    export namespace PlainElement {
        type OPTIONS = phina.display.DisplayElement.OPTIONS;
    }
}
// #endregion phina.display.PlainElement
//=============================================================
// #region phina.display.Shape
declare module phina.display {
    /**
     * @class phina.display.Shape
     * @extends phina.display.PlainElement
     */
    export class Shape extends phina.display.PlainElement {
        padding: number;
        backgroundColor: string;
        fill: string;
        stroke: string;
        strokeWidth: number;
        shadow: boolean;
        shadowBlur: number;
        watchDraw: boolean;
        _dirtyDraw: boolean;

        constructor(options?: Shape.OPTIONS);

        calcCanvasWidth(): number;
        calcCanvasHeight(): number;
        calcCanvasSize(): { width: number, height: number };
        isStrokable(): boolean;
        prerender(canvas: phina.graphics.Canvas): void;
        postrender(canvas: phina.graphics.Canvas): void;
        renderFill(canvas: phina.graphics.Canvas): void;
        renderStroke(canvas: phina.graphics.Canvas): void;
        render(canvas: phina.graphics.Canvas): this;

        static watchRenderProperty(key: string): void;
        static watchRenderProperties(keys: string[]): void;
    }
    export namespace Shape {
        type OPTIONS = phina.display.PlainElement.OPTIONS & {
            /** @default 64 */
            width?: number,
            /** @default 64 */
            height?: number,
            /** @default 8 */
            padding?: number,

            /** @default '#aaa' */
            backgroundColor?: string,
            /** @default '#00a' */
            fill?: string,
            /** @default '#aaa' */
            stroke?: string,
            /** @default 4 */
            strokeWidth?: number,

            /** @default false */
            shadow?: boolean,
            /** @default 4 */
            shadowBlur?: number,
        };
    }
}
// #endregion phina.display.Shape
//=============================================================
// #region phina.display.RectangleShape
declare module phina.display {
    /**
     * @class phina.display.RectangleShape
     * @extends phina.display.Shape
     */
    export class RectangleShape extends phina.display.Shape {
        cornerRadius: number;

        constructor(options?: RectangleShape.OPTIONS);
        prerender(canvas: phina.graphics.Canvas): void;
    }
    export namespace RectangleShape {
        type OPTIONS = phina.display.Shape.OPTIONS & {
            /** @default 'transparent' */
            backgroundColor?: string,
            /** @default 'blue' */
            fill?: string,
            /** @default '#aaa' */
            stroke?: string,
            /** @default 4 */
            strokeWidth?: number,
            /** @default 0 */
            cornerRadius?: number,
        };
    }
}
// #endregion phina.display.RectangleShape
//=============================================================
// #region phina.display.CircleShape
declare module phina.display {
    /**
     * @class phina.display.CircleShape
     * @extends phina.display.Shape
     */
    export class CircleShape extends phina.display.Shape {
        constructor(options?: CircleShape.OPTIONS);
        prerender(canvas: phina.graphics.Canvas): void;
    }
    export namespace CircleShape {
        type OPTIONS = phina.display.Shape.OPTIONS & {
            /** @default 'transparent' */
            backgroundColor?: string,
            /** @default 'red' */
            fill?: string,
            /** @default '#aaa' */
            stroke?: string,
            /** @default 4 */
            strokeWidth?: number,
            /** @default 32 */
            radius?: number,
        };
    }
}
// #endregion phina.display.CircleShape
//=============================================================
// #region phina.display.TriangleShape
declare module phina.display {
    /**
     * @class phina.display.TriangleShape
     * @extends phina.display.Shape
     */
    export class TriangleShape extends phina.display.Shape {
        constructor(options?: TriangleShape.OPTIONS);
        prerender(canvas: phina.graphics.Canvas): void;
    }
    export namespace TriangleShape {
        type OPTIONS = phina.display.Shape.OPTIONS & {
            /** @default 'transparent' */
            backgroundColor?: string,
            /** @default 'green' */
            fill?: string,
            /** @default '#aaa' */
            stroke?: string,
            /** @default 4 */
            strokeWidth?: number,
            /** @default 32 */
            radius?: number,
        };
    }
}
// #endregion phina.display.TriangleShape
//=============================================================
// #region phina.display.StarShape
declare module phina.display {
    /**
     * @class phina.display.StarShape
     * @extends phina.display.Shape
     */
    export class StarShape extends phina.display.Shape {
        sides: number;
        sideIndent: number;

        constructor(options?: StarShape.OPTIONS);
        prerender(canvas: phina.graphics.Canvas): void;
    }
    export namespace StarShape {
        type OPTIONS = phina.display.Shape.OPTIONS & {
            /** @default 'transparent' */
            backgroundColor?: string,
            /** @default 'yellow' */
            fill?: string,
            /** @default '#aaa' */
            stroke?: string,
            /** @default 4 */
            strokeWidth?: number,
            /** @default 32 */
            radius?: number,
            /** @default 5 */
            sides?: number,
            /** @default 0.38 */
            sideIndent?: number,
        };
    }
}
// #endregion phina.display.StarShape
//=============================================================
// #region phina.display.PolygonShape
declare module phina.display {
    /**
     * @class phina.display.PolygonShape
     * @extends phina.display.Shape
     */
    export class PolygonShape extends phina.display.Shape {
        sides: number;

        constructor(options?: PolygonShape.OPTIONS);
        prerender(canvas: phina.graphics.Canvas): void;
    }
    export namespace PolygonShape {
        type OPTIONS = phina.display.Shape.OPTIONS & {
            /** @default 'transparent' */
            backgroundColor?: string,
            /** @default 'cyan' */
            fill?: string,
            /** @default '#aaa' */
            stroke?: string,
            /** @default 4 */
            strokeWidth?: number,
            /** @default 32 */
            radius?: number,
            /** @default 5 */
            sides?: number,
        };
    }
}
// #endregion phina.display.PolygonShape
//=============================================================
// #region phina.display.HeartShape
/**
 * @class phina.display.HeartShape
 * @extends phina.display.Shape
 */
declare module phina.display {
    export class HeartShape extends phina.display.Shape {
        cornerAngle: number;

        constructor(options?: HeartShape.OPTIONS);
        prerender(canvas: phina.graphics.Canvas): void;
    }
    export namespace HeartShape {
        type OPTIONS = phina.display.Shape.OPTIONS & {
            /** @default 'transparent' */
            backgroundColor?: string,
            /** @default 'pink' */
            fill?: string,
            /** @default '#aaa' */
            stroke?: string,
            /** @default 4 */
            strokeWidth?: number,
            /** @default 32 */
            radius?: number,
            /** @default 45 */
            cornerAngle?: number,
        };
    }
}
// #endregion phina.display.HeartShape
//=============================================================
// #region phina.display.PathShape
declare module phina.display {
    /**
     * @class phina.display.PathShape
     * @extends phina.display.Shape
     */
    export class PathShape extends phina.display.Shape {
        paths: phina.geom.Vector2[];
        lineJoin: string;
        lineCap: string;

        constructor(options?: PathShape.OPTIONS);
        setPaths(paths: phina.geom.Vector2[]): this;
        clear(): this;
        addPaths(paths: phina.geom.Vector2[]): this;
        addPath(x: number, y: number): this;
        getPath(i: number): phina.geom.Vector2;
        getPaths(): phina.geom.Vector2[];
        changePath(i: number, x: number, y: number): this;
        calcCanvasSize(): { width: number, height: number };
        calcCanvasWidth(): number;
        calcCanvasHeight(): number;
        prerender(canvas: phina.graphics.Canvas): void;
    }
    export namespace PathShape {
        type OPTIONS = phina.display.Shape.OPTIONS & {
            /** @default false */
            fill?: boolean,
            /** @default 'transparent' */
            backgroundColor?: string,
            /** @default 'round' */
            lineCap?: string,
            /** @default 'round' */
            lineJoin?: string,
            /** @default [] */
            paths?: phina.geom.Vector2[];
        };
    }
}
// #endregion phina.display.PathShape
//=============================================================
// #region phina.display.Sprite
declare module phina.display {
    /**
     * @class phina.display.Sprite
     * @extends phina.display.DisplayElement
     */
    export class Sprite extends phina.display.DisplayElement {
        srcRect: phina.geom.Rect;

        constructor(image: string | phina.asset.Texture, width?: number, height?: number);

        draw(canvas: phina.graphics.Canvas): void;

        setImage(image: string | phina.asset.Texture, width?: number, height?: number): this;

        setFrameIndex(index: number, width?: number, height?: number): this;

        image: phina.asset.Texture;
        frameIndex: number;
    }
}
// #endregion phina.display.Sprite
//=============================================================
// #region phina.display.Label
declare module phina.display {
    /**
     * @class phina.display.Label
     * @extends phina.display.Shape
     */
    export class Label extends phina.display.Shape {
        fontSize: number;
        fontWeight: string;
        fontFamily: string;
        align: string;
        baseline: string;
        lineHeight: number;

        /**
         * @constructor
         */
        constructor(options?: Label.OPTIONS | string);

        calcCanvasWidth(): number;
        calcCanvasHeight(): number;

        prerender(canvas: phina.graphics.Canvas): void;
        renderFill(canvas: phina.graphics.Canvas): void;
        renderStroke(canvas: phina.graphics.Canvas): void;

        /**
         * text
         */
        text: string;
        readonly font: string;
    }
    export namespace Label {
        type OPTIONS = phina.display.Shape.OPTIONS & {
            /** @default 'transparent' */
            backgroundColor?: string,

            /** @default 'black' */
            fill?: string,
            /** @default null */
            stroke?: string | null,
            /** @default 2 */
            strokeWidth?: number,

            // 
            /** @default 'Hello, world!' */
            text?: string,
            // 
            /** @default 32 */
            fontSize?: number,
            /** @default '' */
            fontWeight?: string,
            /** @default "'HiraKakuProN-W3'" */
            fontFamily?: string, // Hiragino or Helvetica,
            // 
            /** @default 'center' */
            align?: string,
            /** @default 'middle' */
            baseline?: string,
            /** @default 1.2 */
            lineHeight?: number,
        };
    }
}
// #endregion phina.display.Label
//=============================================================
// #region phina.display.DisplayScene
declare module phina.display {
    /**
     * @class phina.display.DisplayScene
     * @extends phina.app.Scene
     */
    export class DisplayScene extends phina.app.Scene {
        canvas: phina.graphics.Canvas;
        renderer: phina.display.CanvasRenderer;
        backgroundColor: string | null;
        width: number;
        height: number;
        gridX: phina.util.Grid;
        gridY: phina.util.Grid;
        interactive: boolean;

        _overFlags: {};
        _touchFlags: {};

        constructor(params?: DisplayScene.OPTIONS);
        hitTest(): boolean;

        setInteractive(flag: boolean): void;

        _update(): void;
        _render(): void;
    }
    export namespace DisplayScene {
        type OPTIONS = {
            /** @default 640 */
            width?: number,
            /** @default 960 */
            height?: number,

            /** @default null */
            backgroundColor?: string | CanvasGradient | CanvasPattern | null;
        };
    }
}
// #endregion phina.display.DisplayScene
//=============================================================
// #region phina.display.Layer
declare module phina.display {
    /**
     * @class phina.display.Layer
     * @extends phina.display.DisplayElement
     */
    export class Layer extends phina.display.DisplayElement {
        /** 子供を 自分の CanvasRenderer で描画するか */
        renderChildBySelf: boolean;
        domElement?: DOMElement;

        constructor(options?: Layer.OPTIONS);
        draw(canvas: phina.graphics.Canvas): void;
    }
    export namespace Layer {
        type OPTIONS = phina.display.DisplayElement.OPTIONS & {
            /** @default 640 */
            width?: 640,
            /** @default 960 */
            height?: 960,
        };
    }
}
// #endregion phina.display.Layer
//=============================================================
// #region phina.display.CanvasLayer
declare module phina.display {
    /**
     * @class phina.display.CanvasLayer
     * @extends phina.display.Layer
     */
    export class CanvasLayer extends phina.display.Layer {
        canvas: phina.graphics.Canvas;
        renderer: phina.display.CanvasRenderer;
        domElement: DOMElement;

        constructor(options?: CanvasLayer.OPTIONS);
        draw(canvas: phina.graphics.Canvas): void;
    }
    export namespace CanvasLayer {
        type OPTIONS = phina.display.Layer.OPTIONS;
    }
}
// #endregion phina.display.CanvasLayer
//=============================================================
// #region phina.display.ThreeLayer
declare module phina.display {
    /**
     * @class phina.display.ThreeLayer
     * @extends phina.display.Layer
     */
    export class ThreeLayer extends phina.display.Layer {
        scene: any | null;
        camera: any | null;
        light: any | null;
        renderer: any | null;

        constructor(options?: ThreeLayer.OPTIONS);
    }
    export namespace ThreeLayer {
        type OPTIONS = phina.display.Layer.OPTIONS;
    }
}
// #endregion phina.display.ThreeLayer
//=============================================================
// #region phina.display.CanvasRenderer
declare module phina.display {
    /**
     * @class phina.display.CanvasRenderer
     */
    export class CanvasRenderer {
        canvas: phina.graphics.Canvas;

        constructor(canvas: phina.graphics.Canvas);
        render(scene: phina.app.Scene): void;
        renderChildren(obj: phina.app.Element): void;
        renderObject(obj: phina.app.Element): void;
    }
}
// #endregion phina.display.CanvasRenderer
//=============================================================
// #region phina.display.DomApp
declare module phina.display {
    /**
     * @class phina.display.DomApp
     * @extends phina.app.BaseApp
     */
    export class DomApp extends phina.app.BaseApp {
        domElement: DOMElement;
        mouse: phina.input.Mouse;
        touch: phina.input.Touch;
        touchList: phina.input.TouchList;
        keyboard: phina.input.Keyboard;
        accelerometer: phina.input.Accelerometer;
        pointer: phina.input.Touch | phina.input.Mouse;
        pointers: phina.input.TouchList | phina.input.Mouse[];

        /**
         * @constructor
         */
        constructor(options?: DomApp.OPTIONS);

        _checkClick(e?: any): void;
    }
    export namespace DomApp {
        type OPTIONS = {
            domElement?: DOMElement,
            query?: keyof ElementTagNameMap,
            fps?: number;
            runner?: Function;
        };
    }
}
// #endregion phina.display.DomApp
//=============================================================
// #region phina.display.CanvasApp
declare module phina.display {
    /**
     * @class phina.display.CanvasApp
     * @extends phina.display.DomApp
     */
    export class CanvasApp extends phina.display.DomApp {
        gridX: phina.util.Grid;
        gridY: phina.util.Grid;
        canvas: phina.graphics.Canvas;
        backgroundColor: string;

        /**
         * @constructor
         */
        constructor(options?: CanvasApp.OPTIONS);

        _draw(): void;

        fitScreen(): void;

        static readonly defaults: {
            width: 640,
            height: 960,
            columns: 12,
            fit: true,
            append: true,
        };
    }
    export namespace CanvasApp {
        type OPTIONS = phina.display.DomApp.OPTIONS & {
            /** @default 640 */
            width?: number,
            /** @default 960 */
            height?: number,
            /** @default 12 */
            columns?: number,
            /** @default true */
            fit?: boolean,
            /** @default true */
            append?: boolean,

            /** @default 'white' */
            backgroundColor?: string;
            /** @default false */
            pixelated?: boolean;
        };
    }
}
// #endregion phina.display.CanvasApp
// #endregion phina.display
//=============================================================
// #region phina.effect
// #region phina.effect.Wave
declare module phina.effect {
    /**
     * @class phina.effect.Wave
     * Button
     * @extends phina.display.CircleShape
     */
    export class Wave extends phina.display.CircleShape {
        /**
         * @constructor
         */
        constructor(options?: Wave.OPTIONS);
    }
    export namespace Wave {
        type OPTIONS = phina.display.CircleShape.OPTIONS & {
            /** @default 'white' */
            fill?: string,
            /** @default false */
            stroke?: boolean,
        };
    }
}
// #endregion phina.effect.Wave
// #endregion phina.effect
//=============================================================
// #region phina.ui
// #region phina.ui.Button
declare module phina.ui {
    /**
     * @class phina.ui.Button
     * Button
     * @extends phina.display.Shape
     */
    export class Button extends phina.display.Shape {
        cornerRadius: number;
        text: string;
        fontColor: string;
        fontSize: number;
        fontWeight: string;
        fontFamily: string;

        /**
         * @constructor
         */
        constructor(options?: Button.OPTIONS);
        prerender(canvas: phina.graphics.Canvas): void;
        postrender(canvas: phina.graphics.Canvas): void;
    }
    export namespace Button {
        type OPTIONS = phina.display.Shape.OPTIONS & {
            /** @default 200 */
            width?: number,
            /** @default 80 */
            height?: number,
            /** @default 'transparent' */
            backgroundColor?: string,
            /** @default 'hsl(200, 80%, 60%)' */
            fill?: string,
            /** @default null */
            stroke?: string | null,

            /** @default 8 */
            cornerRadius?: null,
            /** @default 'Hello' */
            text?: string,
            /** @default 'white' */
            fontColor?: string,
            /** @default 32 */
            fontSize?: number,
            /** @default '' */
            fontWeight?: string,
            /** @default "'HiraKakuProN-W3'" */
            fontFamily?: string, // Hiragino or Helvetica,
        };
    }
}
// #endregion phina.ui.Button
//=============================================================
// #region phina.ui.Gauge
declare module phina.ui {
    /**
     * @class phina.ui.Gauge
     * @extends phina.display.Shape
     */
    export class Gauge extends phina.display.Shape {
        _value: number;
        maxValue: number;
        gaugeColor: string;
        cornerRadius: number;
        visualValue: number;
        animation: boolean;
        animationTime: number;

        constructor(options?: Gauge.OPTIONS);

        /**
         * 満タンかをチェック
         */
        isFull(): boolean;

        /**
         * 空っぽかをチェック
         */
        isEmpty(): boolean;

        setValue(value: number): void;

        getRate(): number;

        prerender(canvas: phina.graphics.Canvas): void;
        postrender(canvas: phina.graphics.Canvas): void;

        value: number;
    }
    export namespace Gauge {
        type OPTIONS = phina.display.Shape.OPTIONS & {
            /** @default 256 */
            width?: number,
            /** @default 32 */
            height?: number,
            /** @default 'transparent' */
            backgroundColor?: string,
            /** @default 'white' */
            fill?: string,
            /** @default #aaa */
            stroke?: string,
            /** @default 4 */
            strokeWidth?: number,

            /** @default 100 */
            value?: number,
            /** @default 100 */
            maxValue?: number,
            /** @default '#44f' */
            gaugeColor?: string,
            /** @default 0 */
            cornerRadius?: number,
        };
    }
}
// #endregion phina.ui.Gauge
//=============================================================
// #region phina.ui.CircleGauge
declare module phina.ui {
    /**
     * @class phina.ui.CircleGauge
     * @extends phina.ui.Gauge
     */
    export class CircleGauge extends phina.ui.Gauge {
        radius: number;
        anticlockwise: boolean;
        showPercentage: boolean;

        startAngle?: number;
        endAngle?: number;

        constructor(options?: CircleGauge.OPTIONS);

        prerender(canvas: phina.graphics.Canvas): void;
        renderFill(canvas: phina.graphics.Canvas): void;
        renderStroke(canvas: phina.graphics.Canvas): void;
        postrender(): void;
    }
    export namespace CircleGauge {
        type OPTIONS = phina.ui.Gauge.OPTIONS & {
            /** @default 'transparent' */
            backgroundColor?: string,
            /** @default #aaa */
            fill?: string,
            /** @default #222 */
            stroke?: string,

            /** @default 64 */
            radius?: number,
            /** @default true */
            anticlockwise?: boolean,
            /** @default false */
            showPercentage?: boolean,
        };
    }
}
// #endregion phina.ui.CircleGauge
//=============================================================
// #region phina.ui.LabelArea
declare module phina.ui {
    /**
     * @class phina.ui.LabelArea
     * @extends phina.display.Label
     */
    export class LabelArea extends phina.display.Label {
        _lineUpdate: boolean;
        verticalAlign: string | number;
        scroll: phina.geom.Vector2;

        constructor(options?: LabelArea.OPTIONS);

        calcCanvasWidth(): number;
        calcCanvasHeight(): number;

        getOffsetY(): number;
        getOffsetX(): number;

        getTextWidthCache(): { [key: string]: number };

        spliceLines(lines: string[]): string[];

        getLines(): string[];

        prerender(canvas: phina.graphics.Canvas): void;

        renderFill(canvas: phina.graphics.Canvas): void;

        renderStroke(canvas: phina.graphics.Canvas): void;

        text: string;
        scrollX: number;
        scrollY: number;

        static readonly alignToOffsetMap: {
            start: -0.5,
            left: -0.5,
            center: 0,
            end: 0.5,
            right: 0.5,
        };
        static readonly verticalAlignToOffsetMap: {
            top: -0.5,
            center: 0,
            middle: 0,
            bottom: 0.5,
        };

    }
    export namespace LabelArea {
        type OPTIONS = phina.display.Label.OPTIONS & {
            /** @default 'top' */
            verticalAlign?: string,
            /** @default 'left' */
            align?: string,
            /** @default 'top' */
            baseline?: string,
            /** @default 320 */
            width?: number,
            /** @default 320 */
            height?: number,
            /** @default 0 */
            scrollX?: number,
            /** @default 0 */
            scrollY?: number,

            /** @default phina.geom.Vector2() */
            scroll?: phina.geom.Vector2,
        };
    }
}
// #endregion phina.ui.LabelArea
// #endregion phina.ui
//=============================================================
// #region phina.game
// #region phina.game.ManagerScene
declare module phina.game {
    /**
     * @class phina.game.ManagerScene
     * @extends phina.app.Scene
     */
    export class ManagerScene extends phina.app.Scene {
        commonArguments: {};
        scenes?: ManagerScene.SCENE_PARAM[];
        sceneIndex?: number;

        /**
         * @constructor
         */
        constructor(options?: ManagerScene.OPTIONS);


        /**
         * scenes をセット
         */
        setScenes(scenes: ManagerScene.SCENE_PARAM[]): this;


        replaceScene(label?: number | string, args?: any[]): this;


        /**
         * index(or label) のシーンへ飛ぶ
         */
        gotoScene(label?: number | string, args?: any[]): this;

        /**
         * 次のシーンへ飛ぶ
         */
        gotoNext(args?: any[]): this;

        /**
         * シーンインデックスを取得
         */
        getCurrentIndex(): number;

        /**
         * シーンラベルを取得
         */
        getCurrentLabel(): string;

        /**
         * ラベルからインデックスに変換
         */
        labelToIndex(label: string): number;

        /**
         * インデックスからラベルに変換
         */
        indexToLabel(index: number): string;

        onnext(e: phina.game.ManagerScene): void;

    }
    export namespace ManagerScene {
        type SCENE_PARAM = {
            className: string,
            label: string,
            arguments?: {},
            nextLabel?: string,
            nextArguments?: {},
        };
        type OPTIONS = {
            /** @default undefined */
            scenes?: SCENE_PARAM[],
            /** @default 0 */
            startLabel?: number,
        };
    }
}
// #endregion phina.game.ManagerScene
//=============================================================
// #region phina.game.SplashScene
declare module phina.game {
    /**
     * @class phina.game.SplashScene
     * @extends phina.display.DisplayScene
     */
    export class SplashScene extends phina.display.DisplayScene {
        texture: phina.asset.Texture;
        sprite?: phina.display.Sprite;

        constructor(options?: SplashScene.OPTIONS);
        _init(): void;

        static defaults: {
            /** @default 'http://cdn.rawgit.com/phi-jp/phina.js/develop/logo.png' */
            imageURL: string,
        };
    }
    export namespace SplashScene {
        type OPTIONS = phina.display.DisplayScene.OPTIONS;
    }
}
// #endregion phina.game.SplashScene
//=============================================================
// #region phina.game.TitleScene
declare module phina.game {
    /**
     * @class phina.game.TitleScene
     * @extends phina.display.DisplayScene
     */
    export class TitleScene extends phina.display.DisplayScene {
        titleLabel: phina.display.Label;
        touchLabel?: phina.display.Label;

        /**
         * @constructor
         */
        constructor(params?: TitleScene.OPTIONS);
    }
    export namespace TitleScene {
        type OPTIONS = phina.display.DisplayScene.OPTIONS & {
            /** @default 'phina.js games' */
            title?: string,
            /** @default '' */
            message?: string,

            /** @default 'white' */
            fontColor?: string,
            /** @default 'hsl(200, 80%, 64%)' */
            backgroundColor?: string,
            /** @default '' */
            backgroundImage?: string,

            /** @default 'touch' */
            exitType?: string,
        };
    }
}
// #endregion phina.game.SplashScene
//=============================================================
// #region phina.game.ResultScene
declare module phina.game {
    /**
     * @class phina.game.ResultScene
     * @extends phina.display.DisplayScene
     */
    export class ResultScene extends phina.display.DisplayScene {
        scoreText: phina.display.Label;
        scoreLabel: phina.display.Label;
        messageLabel: phina.display.Label;
        shareButton: phina.ui.Button;
        playButton: phina.ui.Button;

        /**
         * @constructor
         */
        constructor(params?: ResultScene.OPTIONS);
    }
    export namespace ResultScene {
        type OPTIONS = phina.display.DisplayScene.OPTIONS & {
            /** @default 16 */
            score?: number,

            /** @default 'this is phina.js project.' */
            message?: string,
            /** @default 'phina_js,game,javascript' */
            hashtags?: string,
            /** @default phina.global.location && phina.global.location.href */
            url?: string,

            /** @default 'white' */
            fontColor?: string,
            /** @default 'hsl(200, 80%, 64%)' */
            backgroundColor?: string,
            /** @default '' */
            backgroundImage?: string,
        };
    }
}
// #endregion phina.game.ResultScene
//=============================================================
// #region phina.game.LoadingScene
declare module phina.game {
    /**
     * @class phina.game.LoadingScene
     * @extends phina.display.DisplayScene
     */
    export class LoadingScene extends phina.display.DisplayScene {
        gauge: phina.ui.Gauge;

        /**
         * @constructor
         */
        constructor(options?: LoadingScene.OPTIONS);
    }
    export namespace LoadingScene {
        type OPTIONS = phina.display.DisplayScene.OPTIONS & {
            /** @default 'auto' */
            exitType?: string,
            /** @default false */
            lie?: boolean,

            assets?: phina.asset.AssetLoader.LOAD_PARAMS,
        };
    }
}
// #endregion phina.game.LoadingScene
//=============================================================
// #region phina.game.CountScene
declare module phina.game {
    /**
     * @class phina.game.CountScene
     * @extends phina.display.DisplayScene
     */
    export class CountScene extends phina.display.DisplayScene {
        label: phina.display.Label;
        countList: number[];
        counter: number;
        exitType: string;

        /**
         * @constructor
         */
        constructor(options?: CountScene.OPTIONS);

        _updateCount(): void;
    }
    export namespace CountScene {
        type OPTIONS = phina.display.DisplayScene.OPTIONS & {
            /** @default 3 */
            count?: number,

            /** @default 640 */
            width?: number,
            /** @default 960 */
            height?: number,

            /** @default 'white' */
            fontColor?: string,
            /** @default 164 */
            fontSize?: number,
            /** @default 'rgba(50, 50, 50, 1)' */
            backgroundColor?: string,

            /** @default 'auto' */
            exitType?: string,
        };
    }
}
// #endregion phina.game.CountScene
//=============================================================
// #region phina.game.PauseScene
declare module phina.game {
    /**
     * @class phina.game.PauseScene
     * @extends phina.display.DisplayScene
     */
    export class PauseScene extends phina.display.DisplayScene {
        text: phina.display.Label;

        /**
         * @constructor
         */
        constructor(params?: PauseScene.OPTIONS);
    }
    export namespace PauseScene {
        type OPTIONS = phina.display.DisplayScene.OPTIONS & {
            /** @default 'white' */
            fontColor?: string,
            /** @default 'hsla(0, 0%, 0%, 0.85)' */
            backgroundColor?: string,

            /** @default 'touch' */
            exitType?: string,
        };
    }
}
// #endregion phina.game.PauseScene
//=============================================================
// #region phina.game.GameApp
declare module phina.game {
    /**
     * @class phina.game.GameApp
     * @extends phina.display.CanvasApp
     */
    export class GameApp extends phina.display.CanvasApp {
        constructor(options?: GameApp.OPTIONS);

        _enableDebugger(): void;
    }
    export namespace GameApp {
        type SCENES_DEFAULT = [
            {
                className: 'SplashScene',
                label: 'splash',
                nextLabel: 'title',
            },

            {
                className: 'TitleScene',
                label: 'title',
                nextLabel: 'main',
            },
            {
                className: 'MainScene',
                label: 'main',
                nextLabel: 'result',
            },
            {
                className: 'ResultScene',
                label: 'result',
                nextLabel: 'title',
            }
        ];
        type OPTIONS = phina.display.CanvasApp.OPTIONS & phina.game.LoadingScene.OPTIONS & {
            /** @default 'title' */
            startLabel?: string,
            /** @default SCENES_DEFAULT */
            scenes?: ManagerScene.SCENE_PARAM[],
            /** @default false */
            debug?: boolean,
            /** @default false */
            autoPause?: boolean,
        };
    }
}
// #endregion phina.game.GameApp
// #endregion phina.game
//=============================================================
// #region phina.social
// #region phina.social.Twitter
declare module phina.social {
    /**
     * @class phina.social.Twitter
     * 
     */
    export class Twitter {
        /**
         * @constructor
         */
        // constructor(options?: {});

        static readonly baseURL: 'http://twitter.com/intent';
        static readonly defaults: {
            // type: 'tweet',
            text: 'Hello, world!',
            // screen_name: 'phi_jp',
            hashtags: 'javascript,phina',
            // url: 'http://github.com/phi-jp/phina.js',
            url: string,
            // via: 'phi_jp',
        };

        static createURL(options?: {}): string;
    }
}
// #endregion phina.social.Twitter
// #endregion phina.social
//=============================================================
// #region phina.box2d
// #region phina.box2d.Box2dLayer
// http://box2dweb-doc.readthedocs.org/ja/latest/00_ready.html#id2
declare module phina.box2d {
    /**
     * @class phina.box2d.Box2dLayer
     * @extends phina.display.Layer
     */
    export class Box2dLayer extends phina.display.CanvasLayer {
        world: any;

        constructor(params?: Box2dLayer.OPTIONS);

        _setupDebugDraw(): void;

        createBody(params: phina.box2d.Box2dBody.OPTIONS): phina.box2d.Box2dBody;
        update(app: phina.app.BaseApp): void;
        draw(canvas: phina.graphics.Canvas): void;

    }
    export namespace Box2dLayer {
        type OPTIONS = phina.display.CanvasLayer.OPTIONS & {
            /** @default 50 */
            worldScale?: number,
        };
    }
}
// #endregion phina.box2d.Box2dLayer
//=============================================================
// #region phina.box2d.Box2dBody
declare module phina.box2d {
    /**
     * @class phina.box2d.Box2dBody
     * @extends phina.accessory.Accessory
     */
    export class Box2dBody extends phina.accessory.Accessory {
        world: any;
        type: any;
        shape: any;

        constructor(params?: Box2dBody.OPTIONS);

        update(app: phina.app.BaseApp): void;

        _init(): this;
        _setupBody(): this;
        _bindFixture(): void;
    }
    export namespace Box2dBody {
        type OPTIONS = {
            /** @default 50 */
            world?: any,
            type?: any,
            shape?: any,
        };
    }
}
// #endregion phina.box2d.Box2dBody
//=============================================================
// #endregion phina.box2d
// #region deprecated
declare module phina.display {
    export interface CanvasElement extends phina.display.DisplayElement { }
    export interface CanvasScene extends phina.display.DisplayScene { }
    //    export type CanvasElement = phina.display.DisplayElement;
    //    export type CanvasScene = phina.display.DisplayScene;
}
// #endregion deprecated

import Generator from "yeoman-generator";
import { glob } from "glob";
import { mkdirSync } from "node:fs";

export default class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("appname", {
      type: String,
      required: false,
      default: this.appname,
    });
  }

  async prompting() {
    this.log("Welcome to the generator!");
    this.props = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this._toDefaultPackageName(),
      },
      {
        type: "input",
        name: "description",
        message: "Your project description",
      },
      {
        type: "input",
        name: "author",
        message: "Author",
        store: true,
      },
      {
        type: "list",
        name: "packageManager",
        message: "Choose a package manager",
        choices: [
          { name: "npm", value: "npm" },
          { name: "yarn", value: "yarn" },
          { name: "pnpm", value: "pnpm" },
        ],
      },
    ]);
    this.env.options.nodePackageManager = this.props.packageManager;
  }

  writing() {
    if (this.options.appname !== ".") {
      mkdirSync(this.options.appname);
      this.destinationRoot(this.destinationPath(this.options.appname));
    }
    glob
      .sync("**", {
        cwd: this.sourceRoot(),
        dot: true,
        nodir: true,
      })
      .forEach((template) => {
        this.fs.copyTpl(
          this.templatePath(template),
          this.destinationPath(template),
          this.props
        );
      });
  }

  _toDefaultPackageName() {
    return this.options.appname === "." ? this.appname : this.options.appname;
  }
}
